// NaviBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navibar.css';
import Ishan from "../../../public/ishan.png"

const NaviBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Ishan} alt="logo"></img>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NaviBar;
