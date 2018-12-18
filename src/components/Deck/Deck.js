import React, { Component } from 'react';
import DeckCard from '../DeckCard/DeckCard';
import AddCard from '../AddCard/AddCard';
import Quiz from '../Quiz/Quiz';
import Aux from '../../hoc/Aux';
import { max_number } from '../../helper/index';
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
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }


  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let cards in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(cards)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(cards);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ cards: value });
        } catch (e) {
          // handle empty string
          return;
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let cards in this.state) {
      // save to localStorage
      localStorage.setItem(cards, JSON.stringify(this.state.cards));
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
            {this.state.cards.map(card => {
              return (<DeckCard
                key={card.id}
                card={card}
                cardNumber={card.id}
                question={card.question}
                answer={card.answer}
                removeCard={this.removeCard}
                
              />)
            })}
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