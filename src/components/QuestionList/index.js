import React, { Component } from 'react';
import './QuestionList.css';

import Spinner from '../Spinner';
import QuestionListItem from '../QuestionListItem';

class QuestionList extends Component {
  render() {
    const questions = this.props.questions;

    const list = questions.map(question => {
      return (
        <li key={question.id}>
          <QuestionListItem question={question} />
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