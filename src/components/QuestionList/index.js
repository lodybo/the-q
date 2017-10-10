import React, { Component } from 'react';
import './QuestionList.css';

class QuestionList extends Component {
  render() {
    const questions = this.props.questions;

    const list = questions.map(question => {
      return (
        <li key={question.id.toString()}>
          <p className="question">{question.question}</p>
          <p className="notes">{question.notes}</p>
        </li>
      )
    });

    return (
      <ul className="QuestionList">{list}</ul>
    );
  }
}

export default QuestionList;