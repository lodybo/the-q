import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

describe('The Header component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
});