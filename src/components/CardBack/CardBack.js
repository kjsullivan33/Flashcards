import React from 'react';
import Aux from '../../hoc/Aux'
import './CardBack.css';


const cardBack = (props) => {
  return (
    <Aux>
      <h3>Answer</h3>
      <div>{props.answer}</div>
    </Aux>
  );
}



export default cardBack;