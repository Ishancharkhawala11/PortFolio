import React from 'react';
import "./Card.css";

const Card = ({ title, content, isSpecial,  isleft, float }) => {
 
  return (
   (
      <div className={`Text ${isSpecial ? 'special-card' : ''} ${isleft ? 'isLeft' : 'isRight'} ${float ? "floating" : ""}`}>
        <h1>{title}</h1>
        <hr />
        <p>{content}</p>
      </div>
    )
  );
};

export default Card;
