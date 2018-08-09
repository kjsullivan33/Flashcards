import React from 'react';
import CardCollection from './CardCollection';
import { shallow } from 'enzyme';
import '../../setupTest';
import '../../tempPolyfills';


describe('CardCollection', () => {
  // const props = { question: 'What is the DOM', answer: '' };
  const cardCollection = shallow(<CardCollection />);
  const id = 1;


  it('renders properly', () => {
    expect(cardCollection).toMatchSnapshot();
  });

  it('initializes a card array in `state`', () => {
    expect(cardCollection.state()).toEqual({ cards: []});
  });

  describe('when clicking `add-card` button', () => {
    beforeEach(() => {
      cardCollection.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      cardCollection.setState({cards: []});
    });

    it('adds a new card to `state`', () => {
      expect(cardCollection.state().cards).toEqual([{ id: id }]);
    });

    it('adds a new card to be rendered', () => {
      expect(cardCollection.find('.card-list').children().length)
        .toEqual(id);
    });

  });
});