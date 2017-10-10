import React, { Component } from 'react';
import firebase from './lib/firebase';

import Header from './components/Header';
import QuestionInput from './components/QuestionInput';
import QuestionList from './components/QuestionList/';

class App extends Component {
  constructor(props) {
    super(props);

    this.db = firebase.firestore();

    this.state = {
      questions: []
    };

    this.handleNewQuestion = this.handleNewQuestion.bind(this);
  }

  componentDidMount() {
    // db.collection("cities").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //       console.log(doc.id, " => ", doc.data());
    //   });
    // });

    const newState = [];
    this.db.collection('questions').get().then(questionSnapshot => {
      questionSnapshot.forEach(doc => {
        const docData = doc.data();

        const question = {
          id: doc.id,
          question: docData.question,
          notes: docData.notes
        };

        newState.push(question);
      });

      this.setState({
        questions: newState
      });
    });
  }

  handleNewQuestion(question) {
    this.db.collection('questions').add({
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
        <QuestionList questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
