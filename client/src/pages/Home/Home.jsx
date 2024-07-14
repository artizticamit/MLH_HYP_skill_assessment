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
           Skill Assessment and Recommendation Engine
        </h1> <br />
        <div className='home-text-msg'>
            Welcome to Assess your skills and get Recommendation accordingly.
        </div><br />

        <div className="strip">

            <div className='box1'>
              <div className='lable'>Enter your Codeforce's User name</div>

                <div><input className='home-input' type='text' placeholder='Enter username' onChange={(e)=>{handleChange(e)}}></input><br/><br/></div>
                <div><button className='home-input-btn' onClick={handleSubmit}>Submit</button>
                     {
                      click && (
                     <Codeforces username={username}/>
                           )
                       }
                </div>
            </div>

            <div className='box2'>
              <div className='lable'>Enter your Codechef's User name</div>

                <div><input className='home-input' type='text' placeholder='Enter username' onChange={(e)=>{handleChange(e)}}></input><br/><br/></div>
                <div><button className='home-input-btn' onClick={handleSubmit}>Submit</button>
                     {
                      click && (
                     <Codeforces username={username}/>
                           )
                       }
                </div>
            </div>

            <div className='box3'>
              <div className='lable'>Enter your Leetcode's User name</div>

                <div><input className='home-input' type='text' placeholder='Enter username' onChange={(e)=>{handleChange(e)}}></input><br/><br/></div>
                <div><button className='home-input-btn' onClick={handleSubmit}>Submit</button>
                     {
                      click && (
                     <Codeforces username={username}/>
                           )
                       }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home