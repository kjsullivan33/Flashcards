const axios = require('axios');

require('dotenv').config();


export const getDecks = () =>{
  return fetch("http://localhost:4000/cards")
    .then(response => response.json())
    .then(results => results)
    .catch(err => {
      console.log(err);
    });
}

export const addCard = (question, answer) =>{
  console.log("posted question: " + question);
  console.log("posted answer: " + answer);
  axios.post("http://localhost:4000/cards/add-card", {
      question: question,
      answer: answer
    }).then(results => results)
      .catch(err => console.log(err));
}

export const deleteCard = (id) => {
  axios.delete(`http://localhost:4000/cards/${id}/delete`)
    .then(results => results)
    .catch(err => console.log(err));
}

