import React from 'react';
import webImage from '../../assets/web.png';
import uiImage from '../../assets/fullstack.png';
import designImage from '../../assets/design.png';

const About = () => {
  return (
    <div className='about-page rounded mt-3'>
        <h3>About Me</h3>
        <p className='my-3 fw-medium'>
            Hello there! I am thrilled to welcome you to my portfolio. I am a
            passionate and versatile full-stack developer with a keen interest in
            exploring the latest cutting-edge technologies. My journey in the world
            of web development has been nothing short of exhilarating, and I
            constantly strive to enhance my skills and embrace emerging trends in
            the industry.
        </p>
        <h3>What I do!</h3>
        <div className="d-flex about-flex gap-3 mt-3">
            <div className='about-card'>
                <h5>
                    <img src={webImage} alt='web development'
                     style={{ width: "24px", height: "24px" ,margin:"2px"}} />
                    Web Development
                </h5>
                <p>
                I offer custom web development solutions tailored to your needs. 
                I utilizes the latest technologies and best practices to create 
                fast, secure, and scalable websites.
                </p>
            </div>
        </div>
        <div className="d-flex about-flex gap-3  mt-3">
            <div className='about-card'>
                <h5>
                    <img src={uiImage} alt='webImage'
                     style={{ width: "24px", height: "24px" ,margin:"2px"}}/>
                     UI Development
                </h5>
                <p>
                I convert your UI designs into interactive and responsive web interfaces. 
                Using modern frontend frameworks like React.js and Bakend like Node.js, 
                I bring your designs to life with smooth animations and seamless user experiences.
                </p>
            </div>
        </div>
        
        <div className="d-flex about-flex gap-3  mt-3">
            <div className='about-card'>
                <h5>
                    <img src={designImage} alt='designImage'
                     style={{ width: "24px", height: "24px" ,margin:"2px"}}/>
                     UX Designing
                </h5>
                <p>
                I Have Knowledge in create stunning UI designs for your projects. 
                I focus on user-centered design principles to ensure intuitive and 
                visually appealing interfaces.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About;