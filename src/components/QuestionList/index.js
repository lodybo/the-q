import React, { Component } from 'react';
import './QuestionList.css';

import Spinner from '../Spinner';

class QuestionList extends Component {
  componentDidMount() {
    console.log('props: ', this.props.questions);
  }

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

      if (!this.props.questions.length) {
        return <Spinner />;
      }

      return <ul className="QuestionList">{list}</ul>
  }
}

export default QuestionList;