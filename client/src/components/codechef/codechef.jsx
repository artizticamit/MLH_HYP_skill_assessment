import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Codeforces.css'

function Codeforces({username}) {
    console.log(username);

    const [data, setData] = useState({});

   
    useEffect(()=>{
        const fetchUserInfo = async()=>{
            try{
                if(username){
                    const result = await axios.get('https://codeforces.com/api/user.info?handles='+username);
                    setData(result.data); 
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchUserInfo();
    },[username])
    console.log(data);

  return (
    <div className='codeforces-container'>
        <h2 className='codeforces-header'>CodeForces</h2>
        {
            data.status === 'OK' && (
                <div className='codeforces-body'>
                
                    <div>Name = {(data.result[0].firstName?data.result[0].firstName:'' )+ " "+ (data.result[0].lastName ? data.result[0].lastName : '')}</div>
                    <div>Rank = {data.result[0].rank ? data.result[0].rank : ''}</div>
                    <div>Rating = {data.result[0].rating ? data.result[0].rating : ''}</div>
                    <div>Max Rating = {data.result[0].maxRating ? data.result[0].maxRating : ''}</div>
                </div>
            )
        }
    </div>
  )
}

export default Codeforces