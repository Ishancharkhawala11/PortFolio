import React, { useState ,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Navibar.css';
import Ishan from "../../../public/ishan.png";

const NaviBar = () => {
  const location = useLocation(); 
  const [currentPage, setCurrentPage] = useState('');

  // Destructuring pathname from location
  const { pathname } = location;

  // useEffect to update currentPage when pathname changes
  useEffect(() => {
    setCurrentPage(pathname.substring(1)); 
  }, [pathname]);

  // If pathname doesn't exist, set currentPage to 'Home'/
  useEffect(() => {
    if (pathname==='\/') {
      setCurrentPage('Home');
    }
  }, []);

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Ishan} alt="logo" />
      </div>
      <div className='menu'>
        <ul>
          <li onClick={() => setCurrentPage('Home')}>
            <Link to="/">Home</Link>
            {currentPage === 'Home' && <hr className='line1' />}
          </li>
          <li onClick={() => setCurrentPage('about')}>
            <Link to="/about">About</Link>
            {currentPage === 'about' && <hr className='line1' />}
          </li>
          <li onClick={() => setCurrentPage('projects')}>
            <Link to="/projects">Projects</Link>
            {currentPage === 'projects' && <hr className='line1' />}
          </li>
          <li onClick={() => setCurrentPage('resume')}>
            <Link to="/resume">Resume</Link>
            {currentPage === 'resume' && <hr className='line1' />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NaviBar;
