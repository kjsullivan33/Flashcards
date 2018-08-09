import React from 'react';
import './CardBack.css';


const cardBack = (props) => {
  return (
    <div className="card-back">
      <h2>Answer</h2>
      <div>{props.answer}</div>
    </div>
  );
}



export default cardBack;