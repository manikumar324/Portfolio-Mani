import React from 'react';
import ContactCard from './ContactCard';
import SocialMedia from './SocialMedia';
import ProfilePhoto from '../../assets/profile.jpg';


const Profile = () => {
  return (
    <div className='profile-width mt-3'>
        <div className='d-flex align-items-center flex-column'>
            <img style={{width:"200px",height:"200px",borderRadius:"100px"}}
            src={ProfilePhoto} alt='profile'/>
            <h5 className='my-3'>Mani Kumar Nakka</h5>
            <h6 className='text-color mb-3'>Full Stack Developer</h6>
        </div>
        
        <SocialMedia />
        <ContactCard />
        
    </div>
  )
}

export default Profile;