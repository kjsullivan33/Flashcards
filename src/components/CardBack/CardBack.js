import React from 'react';
import Aux from '../../hoc/Aux'
import './CardBack.css';


const cardBack = (props) => {
  return (
    <Aux>
      <h2>Answer</h2>
      <div>{props.answer}</div>
    </Aux>
  );
}



export default cardBack;