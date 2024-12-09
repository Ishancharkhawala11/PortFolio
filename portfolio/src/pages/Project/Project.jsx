import React from 'react'
import ProjectCard from '../../componant/ProjectCard/ProjectCard'
import { renderStars } from '../../componant/Star/renderStars';

import folder from "../../../public/folder.png"
import "./Project.css"
const Project = () => {
  return (
    <div className='project'>
        <div className="star">
        {renderStars()}
      </div>
      <div className='card'>
      <ProjectCard
      title="Portfolio" icon={folder} link="https://github.com/Ishancharkhawala11/PortFolio.git"></ProjectCard>
      <ProjectCard
      title="Myntra" icon={folder} link="https://github.com/Ishancharkhawala11/myntra.git"></ProjectCard>
      <ProjectCard
      title="Weather backend" icon={folder} link="https://github.com/Ishancharkhawala11/weatherBackend.git"></ProjectCard>
      <ProjectCard
      title="Ecom website" icon={folder} link="https://github.com/Ishancharkhawala11/EcomBackend.git"></ProjectCard>
      <ProjectCard
      title="Jan suvidha" icon={folder} link="https://github.com/Ishancharkhawala11/project.git"></ProjectCard>
      <ProjectCard
      title="We Chat" icon={folder} link="https://github.com/Ishancharkhawala11/WeChat.git"></ProjectCard>
      <ProjectCard
      title="Food Delivery App" icon={folder} link="https://github.com/Ishancharkhawala11/Food-Delivery.git"></ProjectCard>
      <ProjectCard
      title="Contact App" icon={folder} link="https://github.com/Ishancharkhawala11/contact-app.git"></ProjectCard>
    
    
      </div>
      
    </div>
  
  )
}

export default Project
