import {Route , Routes} from 'react-router-dom'
// import { useState } from 'react'; 

import './App.css';
import JobPage from './student/JobPage'
import JobDetails from './student/JobDetails/JobDetails';
// import jobData from "./student/data/jobData";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import List from './student/JobDetails/list';
import { useState } from 'react';
import jobData from './student/data/jobData';


function App() {
 const[details,setDetails]=useState(jobData)
  
  return(
    <Routes>
      <Route path='/' element={<JobPage/>}></Route>
      <Route path='/jobDetails' element={<List details={details}/>}></Route>
    </Routes>
  );
}

export default App;
