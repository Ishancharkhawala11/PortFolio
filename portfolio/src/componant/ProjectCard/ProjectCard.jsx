import React from 'react'
import "./ProjectCard.css"
const ProjectCard = ({title,icon}) => {
  return (
    <div className='ProjectCard floating'>
     <img src={icon} alt='icon'/>
     <h1>{title}</h1>
       
    </div>
  )
}

export default ProjectCard