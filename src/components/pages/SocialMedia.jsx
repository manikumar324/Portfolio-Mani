import React from 'react';
import git from '../../assets/github.png';
import insta from '../../assets/instagram.png';
import twit from '../../assets/twitter.png';
import linked from '../../assets/linkedin.png';

const SocialMedia = () => {
    const handleSocialMedia=(link)=>{
        window.open(link,"_blank")
    }
  return (
    <div className='d-flex justify-content-center gap-3 mt-3'>
        <button className='social-icon' 
            onClick={()=>handleSocialMedia("https://www.linkedin.com/in/mani-kumar-nakka-541b99253/")}>
            <img src={linked} alt='linkedin'className='social-image'/>
        </button>
        <button className='social-icon' 
            onClick={()=>handleSocialMedia("https://github.com/manikumar324")}>
            <img src={git} alt='github'className='social-image'/>
        </button>
        <button className='social-icon' 
            onClick={()=>handleSocialMedia("https://www.linkedin.com/in/mani-kumar-nakka-541b99253/")}>
            <img src={insta} alt='instagram'className='social-image'/>
        </button>
        <button className='social-icon' 
            onClick={()=>handleSocialMedia("https://www.linkedin.com/in/mani-kumar-nakka-541b99253/")}>
            <img src={twit} alt='twitterr'className='social-image'/>
        </button>
    </div>
  )
}

export default SocialMedia;