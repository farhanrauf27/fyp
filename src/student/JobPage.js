import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Joblist from './Jobs/Joblist'
import jobData from './data/jobData'
import { useState } from 'react';


function JobPage() {
    const [jobList, setjobList] = useState(jobData)
    return (
        <>
            <div style={{ fontSize: '1.5rem' }}>
                <Navbar></Navbar>
            </div>

            <div className='d-flex' style={{ justifyContent: 'center' }}>
                <div style={{ borderRadius: '25px', justifyContent: 'center', backgroundColor: "#937EB2", width: '80%' }} className='mt-2'>
                    <Profile></Profile>
                </div>
            </div>

            <div className='d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                <Joblist jobList={jobList}></Joblist>
            </div>

        </>
    );
}
export default JobPage;