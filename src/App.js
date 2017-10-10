import React, { Component } from 'react';
import firebase from './lib/firebase';

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
    // this.setState(previousState => ({
    //   questions: [...previousState.questions, question]
    // }));
    
    const db = firebase.firestore();

    db.collection('questions').add({
      question: question.question,
      notes: question.notes
    }).then(ref => {
      console.log('Question added to database', ref);
      this.child.clearForm();
    }).catch(error => console.error('Something went wrong when adding question to database:', error));
  }

  render() {
    return (
      <div>
        <Header/>
        <QuestionInput ref={child => this.child = child} handleSubmit={this.handleNewQuestion} />
      </div>
    );
  }
}

export default App;
