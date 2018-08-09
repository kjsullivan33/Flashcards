import React from 'react';
import CardBack from './CardBack';
import { shallow } from 'enzyme';
import '../../setupTest';
import '../../tempPolyfills';

describe('CardBack', () => {

  const cardBack = shallow(<CardBack />);

  it('renders properly', () => {
    expect(cardBack).toMatchSnapshot();
  });

  //initializes state
  it('initializes an answer in `state`', () => {
    expect(cardBack.state()).toEqual({ answer: '' });
  });
  //sets state

  describe('when typing into the answer input', () => {
    const answer = 'Kristen Sullivan';

    beforeEach(() => {
      cardBack.find('.input-answer').simulate('change', { target: { value: answer } });
    });

    it('updates the question in `state`', () => {
      expect(cardBack.state().answer).toEqual(answer);
    });
  });
});