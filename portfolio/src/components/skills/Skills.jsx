// import React from 'react'
import "./skills.css"

const skillsData = ["HTML" , "CSS" , "JavaScript" , "React js" , "Node.js" , "Express.js" , "MongoDB", "SQL" , "Git" , "GitHub" , "Python" ]


const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skillHeading">My skills</h1>
      <div className="skillsItems">
        {skillsData.map((skill, index) => (
          <div key={index} className="mySkills">
            <h2>{skill}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
