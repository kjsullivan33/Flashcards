import React from 'react';
import Aux from '../../hoc/Aux';
import './CardFront.css';


const cardFront = (props) => {
    return (
      <Aux>
        <h3>Question</h3>
        <p className="card-details">{props.question}</p> 
      </Aux>
    );
}

 

export default cardFront;