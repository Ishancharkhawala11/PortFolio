// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import Hero from '../../componant/Hero/Hero';
import NaviBar from '../../componant/navbar/NaviBar';
import { renderStars } from '../../componant/Star/renderStars'; // Adjust the path accordingly

const Home = () => {
  return (
    <div className='home'>
     
      <div className="star">
        {renderStars()}
      </div>
      <Hero />
    </div>
  );
};

export default Home;
