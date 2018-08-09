import React from 'react';

const addCard = (props) => {
  return (
    <div id='add-card-form'>
      <form onSubmit={props.addCard}>
        <label>Question: </label>
        <input
          type="text"
          className="input-question"
          onChange={props.changedQuestion}
          value={props.question}
        />
        <label>Answer: </label>
        <input
          type="text"
          className="input-answer"
          onChange={props.changedAnswer}
          value={props.answer}
        />
        <input type="submit" value="Add Card"/>
      </form>
    </div>
  )
}

export default addCard;