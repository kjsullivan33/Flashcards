import React, { Component } from 'react';
import DeckCard from '../DeckCard/DeckCard';
import AddCard from '../AddCard/AddCard';
import Quiz from '../Quiz/Quiz';
import Aux from '../../hoc/Aux';
import { getDecks } from '../../helper/api';
import { addCard } from '../../helper/api';
import { deleteCard } from '../../helper/api';
import './Deck.css';


class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      topic: '',
      inputQuestion: '',
      inputAnswer: ''
    }
  }

  componentDidMount() {

    getDecks().then(results => {
      console.log("Called fetchData in Deck.js");
      if(results){
        console.log(results);
        this.setState({ cards: results });
      }
      
    });
  }

  
  handleChangeQuestion = (event) => {
    this.setState({ inputQuestion: event.target.value });
  }

  handleChangeAnswer = (event) => {
    this.setState({ inputAnswer: event.target.value });
  }

  addCard = (e) => {
    const question = this.state.inputQuestion;
    const answer = this.state.inputAnswer;

    addCard(question, answer)
      .then(getDecks()
        .then(results => this.setState({cards : results})
        .catch(err => console.log(err) )))
      .catch(err => console.log(err));
    e.preventDefault();
    e.target.reset();
    
  }


  removeCard = (id) => {
    const cards = this.state.cards.filter(card => card._id !== id);
    this.setState({cards : cards});
    deleteCard(id);
    
  }

  


  render() {
    
    let deck = null;
    if (this.props.showDeck){
      deck = (
        <Aux>
          <AddCard
            changedQuestion={this.handleChangeQuestion}
            changedAnswer={this.handleChangeAnswer}
            question={this.props.inputQuestion}
            answer={this.props.inputAnswer}
            addCard={this.addCard} />
          <div className='deck'>
            {this.state.cards.map((card, index) => {
              return (<DeckCard
                key={card._id}
                card={card}
                cardNumber={index+1}
                question={card.question}
                answer={card.answer}
                removeCard={this.removeCard}
              />)
            })
            }
          </div>
          </Aux>
      )};
    let quiz = null;
    if (this.props.showQuiz) {
      quiz = <Quiz
        cards={this.state.cards}
        removeCard={this.removeCard}/>
    }
    return (
      <div>
        {deck}
        {quiz}
      </div>
    )
  }
}

export default Deck;