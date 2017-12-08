import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import QuestionInput from './index';

describe('The QuestionInput component', () => {
  let component;

  beforeEach(() => {
    component = mount(<QuestionInput />);
  });

  it('should render', () => {
    shallow(<QuestionInput />);
  });

  it('should update state with the entered question', () => {
    const questionInputField = component.find({ name: 'question' });

    questionInputField.simulate('change', {
      target: {
        name: 'question',
        value: 'Who is the biggest tire manufacturer in the world?'
      }
    });

    const state = component.state();
    expect(state.question.question).toBe('Who is the biggest tire manufacturer in the world?');
  });

  it('should update state with the entered notes', () => {
    const notesInputArea = component.find({ name: 'question' });

    notesInputArea.simulate('change', {
      target: {
        name: 'question',
        value: 'Lego, they even were in the Guiness Book of World Records with it!'
      }
    });

    const state = component.state();
    expect(state.question.question).toBe('Lego, they even were in the Guiness Book of World Records with it!');
  });
});


// TODO: This is for the edit tests
// expect(textField.get(0).props.value).toBe('Who is the biggest tire manufacturer in the world?');