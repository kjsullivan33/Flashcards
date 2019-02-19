import React from 'react';
import './AddDeck.css';

const addDeck = (props) => {
  return (
  <div className="add-deck">
      <form className="add-deck__form" onSubmit={props.addDeck}>
        <input className="add-deck__input"
               type="text"
               placeholder="Create a topic"
               onChange={props.changeTopic}
               value={props.topic}/>
        <button className="add-deck__button">Add Deck</button>
      </form>
  </div>
  )
}

export default addDeck;