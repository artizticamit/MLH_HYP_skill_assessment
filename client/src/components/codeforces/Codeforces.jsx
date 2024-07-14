import React,{useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import './Codeforces.css'
import ShowChart from './ShowChart';

function Codeforces({username}) {

    const [userData, setUserData] = useState({});
    const [userStatus, setUserStatus] = useState([]);

   
    useEffect(()=>{
        const fetchUserInfo = async()=>{
            try{
                if(username){
                    const result = await axios.get('https://codeforces.com/api/user.info?handles='+username);
                    setUserData(result.data); 
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchUserInfo();
    },[username])

    useEffect(()=>{
        const fetchUserStatus = async()=>{
            try{
                if(username){

                    const result = await axios.get('https://codeforces.com/api/user.status?handle='+username);
                    if(result.status===200) result.data.status==='OK' ? setUserStatus(result.data.result) : setUserStatus([]); 
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchUserStatus();
    },[username])
    // console.log(userStatus);

    const updatedUserStatus = useMemo(()=>{
        return userStatus.filter(it => it.verdict==='OK');
    }, [userStatus])
    console.log(updatedUserStatus[0]);

    const tagCounts = useMemo(()=>{
        const tagCounts = {};
        updatedUserStatus.forEach(status=>{
            if(status.problem && status.problem.tags){
                status.problem.tags.forEach(tag=>{
                    if(tagCounts[tag]){
                        tagCounts[tag]++;
                    }
                    else{
                        tagCounts[tag] = 1;
                    }
                })
            }
        })
        return tagCounts;
    }, [updatedUserStatus])

    console.log(tagCounts)


  return (
    <div className='codeforces-container'>
        <h2 className='codeforces-header'>CodeForces</h2>
        {
            userData.status === 'OK' && (
                <div className='codeforces-body'>
                
                    <div>Name = {(userData.result[0].firstName?userData.result[0].firstName:'' )+ " "+ (userData.result[0].lastName ? userData.result[0].lastName : '')}</div>
                    <div>Rank = {userData.result[0].rank ? userData.result[0].rank : ''}</div>
                    <div>Rating = {userData.result[0].rating ? userData.result[0].rating : ''}</div>
                    <div>Max Rating = {userData.result[0].maxRating ? userData.result[0].maxRating : ''}</div>
                </div>
            )
        }
        <div className='codeforces-tags'>
                <h3>Tag Counts:</h3>
                <ShowChart tagCounts={tagCounts} />
            </div>
    </div>
  )
}

export default Codeforces