import React, { Component } from 'react';
import './QuestionInput.css';

class QuestionInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      question: {
        question: '',
        notes: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() { }

  handleInputChange(event) {
    const inputName = event.target.name;
    const InputValue = event.target.value;

    const newState = {
      question: {
        ...this.state.question,
        [inputName]: InputValue
      }
    };
    
    this.setState(newState);
  }

  render() {
    return (
      <form className="QuestionInput" onSubmit={this.handleSubmit}>
        <label>
          <p>Vraag</p>
          <input name="question" type="text" value={this.state.question.question} onChange={this.handleInputChange} />
        </label>

        <label>
          <p>Notities</p>
          <textarea name="notes" value={this.state.question.notes} onChange={this.handleInputChange} />
        </label>

        <input type="submit" value="Voeg vraag toe" />
      </form>
    );
  }
}

export default QuestionInput;