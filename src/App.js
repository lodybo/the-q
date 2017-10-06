import React, { Component } from 'react';

import Header from './components/Header';
import QuestionInput from './components/QuestionInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: []
    };

    this.handleNewQuestion = this.handleNewQuestion.bind(this);
  }

  handleNewQuestion(question) {
    this.setState(previousState => ({
      questions: [...previousState.questions, question]
    }));
  }

  render() {
    return (
      <div>
        <Header/>
        <QuestionInput handleSubmit={this.handleNewQuestion} />
      </div>
    );
  }
}

export default App;
