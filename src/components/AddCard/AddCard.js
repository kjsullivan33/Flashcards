import React from 'react';
import './AddCard.css';

const addCard = (props) => {
  return (
    <div id='add-card'>
      <form className='add-card__form' onSubmit={props.addCard}>
            <input 
              className='add-card__input'
              type="text"
              placeholder="Add a question..."
              onChange={props.changedQuestion}
              value={props.question}
            />
            <input
              className='add-card__input'
              type="text"
              placeholder="Add an answer..."
              onChange={props.changedAnswer}
              value={props.answer}
            />
        <button className='btn btn-submit'>Add Card </button>
      </form>
    </div>
  )
}

export default addCard;