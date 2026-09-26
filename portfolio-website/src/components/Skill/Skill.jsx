import React from 'react'
import {skills} from './Skilldata'
import SkillItems from './SkillItems'
import "./Skill.css";


const Skill = () => {
  return (
   <section id="skill" className="skill-section">
     <div className="skill-container">
      <h2 className='skill-heading'>
        My <span>Skills</span>
      </h2>
      

      <div className="skill-list">
        {skills.map((skill) => (
            <SkillItems key = {skill.name} {...skill} />
        ))}
      </div>
    </div>
   </section>
  )
}

export default Skill
