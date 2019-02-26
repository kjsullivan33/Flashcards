import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Deck from './components/Deck/Deck';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDeck: false,
      showQuiz: true
    }
  }

  toggleDeck = () => {
    this.setState({
      showDeck: true,
      showQuiz: false});
  }

  toggleQuiz = () => {
    this.setState({
      showDeck: false,
      showQuiz: true});
  }

  render() {
    return (
      <div className="App">
        <Menu 
          showDeck={this.toggleDeck}
          showQuiz={this.toggleQuiz}/>
        <Deck  
          showDeck={this.state.showDeck}
          showQuiz={this.state.showQuiz}
          />
      </div>
    );
  }
}

export default App;
