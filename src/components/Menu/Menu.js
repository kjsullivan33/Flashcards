import React, { Component } from 'react';

class Menu extends Component {
  render(){
    return (
    <div>
      <button 
        className='display-quiz'
        onClick={this.props.showQuiz}
        >Quiz</button>
      <button 
        className='display-collection'
        onClick={this.props.showCardCollection}
        >Card Collection</button>
    </div>);
  }
}

export default Menu;

