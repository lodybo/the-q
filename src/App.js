import React, { Component } from 'react';

import Header from './components/Header';
import QuestionInput from './components/QuestionInput';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <QuestionInput />
      </div>
    );
  }
}

export default App;
