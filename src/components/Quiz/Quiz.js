import React, { Component } from 'react';
import Card from '../Card/Card';

class Quiz extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      page: 1
    }
  }

  nextCard = () => {
    if(this.state.page < this.props.cards.length){
    this.setState({page : this.state.page + 1 });
    }
  }

  previousCard = () => {
    if(this.state.page > 1){
      this.setState({page : this.state.page - 1});
    }
  }
  render() {
    let card = null;
    if (this.props.cards.length >0) {
      let data = this.props.cards[this.state.page-1];
        card = <Card
        question={data.question}
        answer={data.answer}
        cardNumber={this.props.page} />
    }

    let prev = null;
    if(this.state.page > 1){
      prev = <button className='btn-prev' onClick={this.previousCard}>Previous</button>
    }
    let next = null;
    if(this.state.page < this.props.cards.length){
      next = <button className='btn-next' onClick={this.nextCard}>Next</button>
    }

    return (
      <div >
        <h1>QUIZ</h1>
        {card}
        {prev}
        {next}
      </div >
    );  
  }
}

export default Quiz;