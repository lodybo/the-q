import React from 'react';
import ReactDOM from 'react-dom';
import QuestionInput from './index';

describe('The QuestionInput component', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuestionInput />, div);
  });
});