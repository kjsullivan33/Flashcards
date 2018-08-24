import React, { Component } from 'react';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

import './QuizCard.css';

class QuizCard extends Component {
  constructor(props){
    super(props)

    this.state= {
      showFront: true
    }
  }

  handleFlip = () => {
    let doesShow = this.state.showFront;
    this.setState({showFront: !doesShow});
  }


  render() {

    console.log(this.props);
    let display = null;
    if (this.state.showFront){
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
        onClick={this.handleFlip}>Flip Card</button>
    </div>
    );
  }
}

export default QuizCard;