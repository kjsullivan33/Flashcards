import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render(){
    return (
    <div>
      <button 
        className='btn btn-quiz'
        onClick={this.props.showQuiz}
        >Start the Quiz</button>
      <button 
        className='btn btn-deck'
        onClick={this.props.showDeck}
        >Build Your Deck</button>
    </div>);
  }
}

export default Menu;

