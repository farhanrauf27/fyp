import pic from './WhatsApp Image 2023-03-08 at 8.37.52 PM.jpeg'
import React from 'react';
import './Profile.css'; // Import your CSS file for styling
import jobData from '../data/jobData';

const Profile = () => {
  const a= jobData.length;
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={pic} alt="Profile" />
      </div>
      <div className="profile-name">Muhammad Farhan</div>
      <div className="profile-name" style={{fontWeight:'normal'}}>Web Developer</div>
      <div className="profile-text">
        <div className="left-text">Job Posted<div>{a}</div> </div>
        <div className="right-text">Applied<div>4</div></div>
      </div>
      
    </div>
  );
};

export default Profile;

