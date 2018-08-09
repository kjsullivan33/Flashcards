import React from 'react';
import CardFront from './CardFront';
import { shallow } from 'enzyme';
import '../../setupTest';
import '../../tempPolyfills';

describe ('QuestionInput', () => {

  const cardFront = shallow(<CardFront />);

  it('renders properly', () => {
    expect(cardFront).toMatchSnapshot();
  });

  //initializes state
  it('initializes a question in `state`', () => {
    expect(cardFront.state()).toEqual({ question: '' });
  });
  //sets state

  describe('when typing into the question input', () => {
    const question = 'What is your name?';

    beforeEach(() => {
      cardFront.find('.input-question').simulate('change', { target: { value: question } });
    });

    it('updates the question in `state`', () => {
      expect(cardFront.state().question).toEqual(question);
    });
  });

});