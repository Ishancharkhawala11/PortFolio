import React from 'react'
import "./ProjectCard.css"
const ProjectCard = ({title,icon,link}) => {
  return (
    <div className='ProjectCard floating'>
    <a href={link} className='hre'><img src={icon} alt='icon' className='img'/></a> 
     <h1>{title}</h1>
       
    </div>
  )
}

export default ProjectCard