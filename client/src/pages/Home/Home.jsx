import React,{useState} from 'react'
import Codeforces from '../../components/codeforces/Codeforces'
import Navbar from '../../components/navbar/Navbar';
import './Home.css'

function Home() {

    const [username, setUsername] = useState("");

    const [click, setClick] = useState(false);

    const handleSubmit = ()=>{
        if(username){
            setClick(true);
        }
    }

    const handleChange = (e)=>{
        setClick(false);
        setUsername(e.target.value);
    }

  return (
    <div className='home-container'>
        <Navbar/>
        <h1 className='home-heading'>
           Skill Assessment and Recomendation Engine. 
        </h1>
        <div className='home-text-msg'>
            Welcome to Assess your skills and get Recomendation accordingly.
        </div>

        <input className='home-input' type='text' placeholder='Enter username' onChange={(e)=>{handleChange(e)}}></input>
        <button className='home-input-btn' onClick={handleSubmit}>Submit</button>
        {
            click && (
                <Codeforces username={username}/>
            )
        }
    </div>
  )
}

export default Home