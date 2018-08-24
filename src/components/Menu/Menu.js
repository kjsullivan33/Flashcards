import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render(){
    return (
    <div className='menu'>
      <button 
        className='btn menu__btn'
        onClick={this.props.showQuiz}
        >Start the Quiz</button>
      <button 
        className='btn menu__btn'
        onClick={this.props.showDeck}
        >Build Your Deck</button>
    </div>);
  }
}

export default Menu;

