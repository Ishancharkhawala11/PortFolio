import React from "react";
import { renderStars } from "../../componant/Star/renderStars";
import resume from "../../../public/Screenshot 2024-12-09 154339";
import pdf from "../../../public/Ishan resume.pdf"
import "./Resume.css";
const Resume = () => {
  return (
    <>
       <div className="Resume">
      <div className="star">{renderStars()}</div>
      <div className="image1 floating">
        <img src={resume}></img>
      </div>
      <div className="download">
     <a href={pdf}download>Download PDF</a>
      </div>
    </div>
   
    </>
   
  );
};

export default Resume;
