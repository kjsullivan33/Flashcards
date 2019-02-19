import React, { Component } from 'react';
import QuizCard from '../QuizCard/QuizCard';
import './Quiz.css';

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
    console.log(this.props);
    let prev = null;
    if (this.state.page > 1) {
      prev = <button className='btn btn-increment btn-prev' onClick={this.previousCard}>&larr; Previous</button>
    }
    let next = null;
    if (this.state.page < this.props.cards.length) {
      next = <button className='btn btn-increment btn-next' onClick={this.nextCard}>Next &rarr;</button>
    }

    let card = <h3>Add some cards!</h3>;
    if (this.props.cards.length >0) {
      let data = this.props.cards[this.state.page-1];
        card = <QuizCard
        question={data.question}
        answer={data.answer}
        cardNumber={this.state.page}
        
         />
    }

   

    return (
      <div className="quiz-display">
        {card}
        {prev}
        {next}
      </div >
    );  
  }
}

export default Quiz;