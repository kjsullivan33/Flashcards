const axios = require('axios');

require('dotenv').config();


export const getDecks = () =>{
  return fetch("https://flashcard-api-kjs.herokuapp.com/")
    .then(response => {
      console.log(response);
      return response.json()})
    .then(results => results)
    .catch(err => {
      console.log(err);
    });
}

export const addCard = (question, answer) =>{
  console.log("posted question: " + question);
  console.log("posted answer: " + answer);
  axios.post(`https://flashcard-api-kjs.herokuapp.com/add-card`, {
      question: question,
      answer: answer
    }).then(results => results)
      .catch(err => console.log(err));
}

export const deleteCard = (id) => {
  axios.delete(`https://flashcard-api-kjs.herokuapp.com/${id}/delete`)
    .then(results => results)
    .catch(err => console.log(err));
}

