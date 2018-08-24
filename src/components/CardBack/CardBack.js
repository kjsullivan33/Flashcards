import React from 'react';
import Aux from '../../hoc/Aux'
import './CardBack.css';


const cardBack = (props) => {
  return (
    <Aux>
      <div>{props.answer}</div>
    </Aux>
  );
}



export default cardBack;