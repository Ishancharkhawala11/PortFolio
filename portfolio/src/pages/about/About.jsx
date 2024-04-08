import React from 'react'
import "./About.css"
import { renderStars } from '../../componant/Star/renderStars';
import c from "../../../public/c.svg"
import java from "../../../public/java.webp"
import Html from "../../../public/html.svg"
import css from "../../../public/css.svg"
import js from "../../../public/js.webp"
import node from "../../../public/node.webp"
import express from "../../../public/express.jpg"
import react from "../../../public/react.webp"
import Card from "../../componant/Card/Card"
const About = () => {
  return (
    <div className='About'>
      <div className="star">
        {renderStars()}
      </div>
      <Card 
        title="About Me"
        content="As a recent graduate from Sarvajanik University, I bring a fresh perspective and a hunger to learn. While I may lack extensive industry experience, I make up for it with my eagerness to dive into new challenges and technologies."
        isleft={true} float={true}
      />
      <Card 
        title="My Focus"
        content="I'm deeply committed to mastering front-end technologies like HTML, CSS, and JavaScript, crafting dynamic interfaces with React.js and Angular. Excited to explore the MERN stack—MongoDB, Express.js, React.js, and Node.js—for scalable web solutions integrating client-side and server-side functionalities."
        isleft={false} float={true}
      />
      <Card 
        title="What Sets Me Apart"
        content="What sets me apart is my dedication to continuous learning and improvement. I am committed to staying updated with the latest trends and best practices in web development, ensuring that I can contribute effectively to any project I undertake."
        isSpecial={true} isleft={true} float={true}
      />
      <Card 
        title="Other Skills"
        content="Beyond web development, I bring a diverse skill set honed through gaming and volleyball. Gaming has fostered strategic thinking, teamwork, and quick decision-making, while volleyball has emphasized communication, collaboration, and adaptability in achieving shared objectives."
        isSpecial={true} isleft={false} float={true}
      />
      {/* <div className='Text floating third-div'>
        <h1>What Sets Me Apart</h1>
        <hr></hr>
        <p >As a recent graduate from <span>Sarvajanik University</span>, I bring a fresh perspective and a hunger to learn. While I may lack extensive industry experience, I make up for it with my eagerness to dive into new challenges and technologies.</p>
      </div> */}
      <Card 
        title="My Portfolio"
        content="While my portfolio may not boast years of professional experience, it showcases the projects I've worked on during my education and personal endeavors. Each project reflects my dedication to craftsmanship and my evolving skill set."
        isSpecial={true} isleft={true} float={true}
      />
      <Card 
        title="Let's Connect"
        content="I am eager to collaborate on exciting projects and gain valuable real-world experience. If you're looking for a passionate and driven web developer to join your team or contribute to your project, I'd love to connect and discuss how I can help."
        isSpecial={true} isleft={false} float={true}
      />
      <div className='Text2 Left float'>
        <h1>Known language</h1>
        <hr></hr>
        <div className='Images'>
        <img src={c}></img>
        <img src={java}></img>
        <img src={Html}></img>
        <img src={css}></img>
        <img src={js}></img>
        <img src={react}></img> 
        <img src={node}></img> 
        <img src={express}></img>
        </div>
        
      </div>

    </div>
  )
}

export default About