import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('firebase');

describe('The App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
 