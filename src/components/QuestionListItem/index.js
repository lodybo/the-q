import React, { Component } from 'react';
import './QuestionListItem.css';

class QuestionListItem extends Component {
  render() {
    const question = this.props.question;

    return (
      <div className="QuestionListItem">
        <p className="question">{question.question}</p>
        <p className="notes">{question.notes}</p>
      </div>
    );
  }
}

export default QuestionListItem;