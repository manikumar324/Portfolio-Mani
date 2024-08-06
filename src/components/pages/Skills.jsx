import React from 'react'

const Skills = () => {
  return (
    <div className='d-flex skill-page'>
        <div className='w-half'>
            <h3>Work Skills</h3>
            <div className="d-flex gap-3 mb-2 flex-wrap">
                <span className="skill-icon">React</span>
                <span className="skill-icon">Node.js</span>
                <span className="skill-icon">Express.js</span>
                <span className="skill-icon">Javascript</span>
                <span className="skill-icon">HTML5</span>
                <span className="skill-icon">CSS3</span>

                <span className="skill-icon">Bootstrap</span>
                <span className="skill-icon">Python</span>
                <span className="skill-icon">SQL</span>
                <span className="skill-icon">Ms Excel</span>

                <span className="skill-icon">Git</span>
                <span className="skill-icon">Mysql</span>
            </div>
        </div>
        <div className='w-half'>
            <h3>Soft Skills</h3>
            <div className="d-flex gap-3 mb-2 flex-wrap">
                <span className="skill-icon">Time Management</span>
                <span className="skill-icon">Flexibility</span>
                <span className="skill-icon">Team Player</span>
                <span className="skill-icon">Excellent Communication</span>
            </div>
        </div>
    </div>
  )
}

export default Skills;