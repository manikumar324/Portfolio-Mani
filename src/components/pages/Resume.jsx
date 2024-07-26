import React from 'react';
import Skills from './Skills';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    const handleNavigation = (url) => {
        window.open(url, "_blank");
      };
  return (
    <>
        <div className='resume-card'>
            <h3 className='mb-3'>Resume</h3>
            <div className=''>
                <div className='d-flex flex-column w-100'>
                    <h3><GraduationCap color="#FF9C1A" className='mx-2'/>
                        Education
                    </h3>
                    <div className="resume-card1 ">
                        <p className="text-color">2019-2023</p>
                        <p>Computer Science and Engineering</p>
                        <p>CGPA : 8.29</p>
                        <Link
                            className="link-navigate"
                            onClick={() => {
                            handleNavigation("https://www.rguktrkv.ac.in/indexrkv.php");
                            }}>
                            IIIT RGUKT Rk Valley
                        </Link>
                    </div>
                    <div className='resume-card2 mt-3'>
                        <p className='text-color'>2017 - 2019</p>
                        <p>Pre University Course</p>
                        <p>CGPA : 8.10</p>
                        <Link
                            className="link-navigate"
                            onClick={() => {
                            handleNavigation("https://www.rguktrkv.ac.in/indexrkv.php");
                            }}>
                            IIIT RGUKT Rk Valley
                        </Link>
                    </div>
                    <div className="resume-card1 mt-3">
                        <p className="text-color">2016-2017</p>
                        <p>10ᵗʰ Class</p>
                        <p>GRADE : 9.8</p>
                        <Link
                            className="link-navigate"
                            onClick={() => {
                            handleNavigation("https://www.rguktrkv.ac.in/indexrkv.php");
                            }}>
                            AP MODEL SCHOOL
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Skills></Skills>
    </>
  )
}

export default Resume;