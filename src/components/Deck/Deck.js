import React, { Component } from 'react';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard';
import Quiz from '../Quiz/Quiz';
import { max_number } from '../../helper/index';


class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      inputQuestion: '',
      inputAnswer: ''
    }
  }



  handleChangeQuestion = (event) => {
    this.setState({ inputQuestion: event.target.value });
  }

  handleChangeAnswer = (event) => {
    this.setState({ inputAnswer: event.target.value });
  }

  addCard = (e) => {
    const cards = this.state.cards;
    const question = this.state.inputQuestion;
    const answer = this.state.inputAnswer;
    const ids = this.state.cards.map( card => card.id);
    const max_id = max_number(ids);
    cards.push({ id: max_id + 1, question: question, answer: answer});
    this.setState({ cards: cards, inputQuestion: '', inputAnswer: ''});
    e.preventDefault();
    e.target.reset();
    
  }


  removeCard = (id) => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  }

  


  render() {
    return (
      <div>
        {this.state.cards.map(card => {
          return (<Card
            key={card.id}
            card={card}
            cardNumber={card.id}
            question={card.question}
            answer={card.answer}
            removeCard={this.removeCard}
            />)
        })}
        <AddCard 
          changedQuestion={this.handleChangeQuestion}
          changedAnswer={this.handleChangeAnswer}
          question={this.props.inputQuestion}
          answer={this.props.inputAnswer}
          addCard={this.addCard}/>
        <Quiz 
          cards={this.state.cards}/>
      </div>
    )
  }
}

export default Deck;