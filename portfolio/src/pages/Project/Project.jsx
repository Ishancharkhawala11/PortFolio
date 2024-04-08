import React from 'react'
import ProjectCard from '../../componant/ProjectCard/ProjectCard'
import { renderStars } from '../../componant/Star/renderStars';
import myntra from "../../../public/myntra.webp"
import "./Project.css"
const Project = () => {
  return (
    <div className='project'>
        <div className="star">
        {renderStars()}
      </div>
      <div className='card'>
      <ProjectCard
      title="Myntra" icon={myntra}></ProjectCard>
      <ProjectCard
      title="Myntra" icon={myntra}></ProjectCard>
      <ProjectCard
      title="Myntra" icon={myntra}></ProjectCard>
      <ProjectCard
      title="Myntra" icon={myntra}></ProjectCard>
      </div>
      
    </div>
  
  )
}

export default Project