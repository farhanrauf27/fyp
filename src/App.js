import { useState } from 'react'; 
import './App.css';
import Navbar from './student/Navbar/Navbar';
import Profile from './student/Profile/Profile'
import Joblist from './student/Jobs/Joblist'
import jobData from './student/data/jobData'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

function App() {
  const[jobList,setjobList]=useState(jobData)
  return (
    <>
    <div style={{fontSize:'1.5rem'}} className='pages'>
    <Navbar></Navbar>
    </div>

   <div className='d-flex' style={{justifyContent:'center'}}>
    <div style={{borderRadius:'25px',justifyContent:'center',backgroundColor:"#937EB2",width:'80%'}} className='mt-2'>
    <Profile></Profile>
    </div>
    </div>

    <div className='d-flex' style={{flexWrap:'wrap', justifyContent:'center'}}>
      <Joblist jobList={jobList}></Joblist>
      </div>
    
    </>
  );
}

export default App;
