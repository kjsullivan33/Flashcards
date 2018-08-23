import React from 'react';
import './AddCard.css';

const addCard = (props) => {
  return (
    <div id='add-card-form'>
      <form onSubmit={props.addCard}>
        <div className='card'>
          <div className='question-label'>
            <label>Question</label>
          </div>
          <div className='input'>
            <input
              type="text"
              onChange={props.changedQuestion}
              value={props.question}
            />
          </div>
        </div>
        <div className='card'>
          <div className='answer-label'>
            <label>Answer</label>
          </div>
          <div className='input'>
            <input
              type="text"
              onChange={props.changedAnswer}
              value={props.answer}
            />
          </div>
        </div>
        <button className='btn btn-submit'>Add Card </button>
      </form>
    </div>
  )
}

export default addCard;