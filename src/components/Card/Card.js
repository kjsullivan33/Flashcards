import React, { Component } from 'react';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

import './Card.css';

class Card extends Component {
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

  // handleEdit = () => {
  //   this.setState({showInput: true});
  // }

  render() {
    let display = null;
    if (this.state.showFront){
      display = <CardFront
        showDisplay={this.state.showInput}
        question={this.props.question}
        
      />
    } else {
      display = <CardBack
        showDisplay={this.state.showInput}
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
      <button
        className='btn btn-remove'
        onClick={this.removeCard}>Remove Card</button>
    </div>
    );
  }
}

export default Card;