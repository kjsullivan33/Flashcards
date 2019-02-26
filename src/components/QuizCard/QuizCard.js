import React, { Component } from 'react';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

import './QuizCard.css';

class QuizCard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
   }

  


  render() {

    console.log(this.props);
    let display = null;
    if (this.props.showFront){
      display = <CardFront
        question={this.props.question}
        
      />
    } else {
      display = <CardBack
        answer={this.props.answer}
        
      />
    }

    return( 
    <div className="card-display">
      <p className='card-number'>{this.props.cardNumber}</p>
      {display}
      <button
        className='btn btn-flip'
        onClick={this.props.flip}>Flip Card</button>
    </div>
    );
  }
}

export default QuizCard;