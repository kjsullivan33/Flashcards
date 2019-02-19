import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './DeckCard.css';


class DeckCard extends Component {
  render () {
    
    let deckCard = null;
      if (this.props.card) {
        deckCard =(
          <div className="deck__card">
            <ul>
              <li className="deck__card-content">Q: {this.props.question}</li>
              <li className="deck__card-content">A: {this.props.answer}</li>
            </ul>
            <button
              className='btn btn-remove'
              onClick={() => this.props.removeCard(this.props.card._id)}>
              Remove Card
            </button>
          </div>
        )  
      }
    
    return (
      <Aux>
        {deckCard}
      </Aux>
    );
  }
  
}



export default DeckCard;