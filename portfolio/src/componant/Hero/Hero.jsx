import React from "react";
import "./Hero.css"
import user from "../../../public/user.svg"
const Hero = () => {
  return (
    <div className="Container">
      <div className="Hero">
        <img src={user} alt={user}></img>
        <h1 className="welcome">Welcome to my portfolio!</h1>
        <div className="text"> <p>
        I'm Ishan Charkhawala, a budding UI/UX developer and web developer with a passion for creating engaging digital experiences. Though I'm relatively new to the industry, my enthusiasm and dedication drive me to continually learn and grow in my craft.
        </p></div>
       
      </div>
    </div>
  );
};

export default Hero;
