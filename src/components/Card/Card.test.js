import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import '../../setupTest';
import '../../tempPolyfills';


describe('Card', () => {
  // const props = { question: 'What is the DOM', answer: '' };
  const card = shallow(<Card />);
  const id = 1;
  
  
  it('renders properly', () => {
    expect(card).toMatchSnapshot();
  });

  // it('initializes a card array in `state`', () => {
  //   expect(card.state()).toEqual({ cards: []});
  // });

  // describe('when clicking `add-card` button', () => {
  //   beforeEach(() => {
  //     card.find('.btn-add').simulate('click');
  //   });

  //   afterEach(() => {
  //     card.setState({cards: []});
  //   });

  //   it('adds a new card to `state`', () => {
  //     expect(card.state().cards).toEqual([{ id: id }]);
  //   });

  //   it('adds a new card to be rendered', () => {
  //     expect(card.find('.card-display').children().length)
  //       .toEqual(id);
  //   });

  // });
});