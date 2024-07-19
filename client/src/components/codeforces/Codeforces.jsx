import React,{useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import './Codeforces.css'
import ShowChart from './ShowChart';
import Recommendation from '../Recommendation/Recommendation';

function Codeforces({username}) {

    const [userData, setUserData] = useState({});
    const [userStatus, setUserStatus] = useState([]);

    const [error, setError] = useState(null);

   
    useEffect(()=>{
        const fetchUserInfo = async()=>{
            try{
                if(username){
                    const result = await axios.get('https://codeforces.com/api/user.info?handles='+username);
                    setUserData(result.data); 
                    // setFound(true);
                }
            }catch(err){
                console.log(err);
                setError(err);
            }
        }
        fetchUserInfo();
    },[username])

    useEffect(()=>{
        const fetchUserStatus = async()=>{
            try{
                if(username){

                    const result = await axios.get('https://codeforces.com/api/user.status?handle='+username);
                    if(result.status===200 && result.data && result.data.result && result.data.result.length!==0) result.data.status==='OK' ? setUserStatus(result.data.result) : setUserStatus([]); 
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchUserStatus();
    },[username])

    const updatedUserStatus = useMemo(()=>{
        return userStatus.filter(it => it.verdict==='OK');
    }, [userStatus])

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
    // console.log(updatedUserStatus)



  return (
    <div className='codeforces-container'>
        <h2 className='codeforces-header'>CodeForces</h2>
        {
            (userData.status === 'OK' && updatedUserStatus.length!==0) && (
                <div className='codeforces-body'>
                
                    <div>Name = {(userData.result[0].firstName?userData.result[0].firstName:'' )+ " "+ (userData.result[0].lastName ? userData.result[0].lastName : '')}</div>
                    <div>Rank = {userData.result[0].rank ? userData.result[0].rank : ''}</div>
                    <div>Rating = {userData.result[0].rating ? userData.result[0].rating : ''}</div>
                    <div>Max Rating = {userData.result[0].maxRating ? userData.result[0].maxRating : ''}</div>
                </div>
            )
        }
        {
            (userData.status === 'OK' && updatedUserStatus.length!==0) ? (
                <div>
                    <div className='codeforces-tags'>
                            <h3>Tag Counts:</h3>
                            <ShowChart tagCounts={tagCounts} />
                    </div>
                    <Recommendation userProblems={userStatus} />
                </div>
            ):(
                <div>
                    {
                        error!==null ? (
                            <div>
                                {error.response && error.response.data && error.response.data.comment && (
                                    <div>{error.response.data.comment}</div>
                                )}
                            </div>
                        ):(
                            <div>
                                Loading....
                            </div>
                        )
                    }
                </div>
            )
        }


        
    </div>
  )
}

export default Codeforces