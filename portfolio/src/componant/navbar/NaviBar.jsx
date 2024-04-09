// NaviBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navibar.css';
import Ishan from "../../../public/ishan.png"

const NaviBar = () => {
 const [Hr, setHr] = useState("Home");

 // Function to handle click and toggle hr


  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Ishan} alt="logo"></img>
      </div>
      <div className='menu'>
        <ul>
          <li onClick={()=>{setHr("Home")}}>
            <Link to="/">Home</Link>
            {Hr==="Home" && <hr  className='line1'/>}
          </li>
          <li onClick={()=>{setHr("about")}}>
            <Link to="/about">About</Link>
            {Hr==="about" && <hr  className='line1'/>}
          </li>
          <li onClick={()=>{setHr("projects")}}>
            <Link to="/projects" >Projects</Link>
            {Hr==="projects" && <hr  className='line1'/>}
          </li>
          <li onClick={()=>{setHr("resume")}}>
            <Link to="/resume">Resume</Link>
            {Hr==="resume" && <hr className='line1'/>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NaviBar;
