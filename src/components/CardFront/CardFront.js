import React from 'react';
import './CardFront.css';


const cardFront = (props) => {
    return (
      <div className="card-front">
        <h2>Question</h2>
        <div>{props.question}</div> 
      </div>
    );
}

 

export default cardFront;