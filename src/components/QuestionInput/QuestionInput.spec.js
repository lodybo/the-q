import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import QuestionInput from './index';

describe('The QuestionInput component', () => {
  it('should render', () => {
    shallow(<QuestionInput />);
  });

  it('should fetch the entered data', () => {
    const component = mount(<QuestionInput />);

    const textField = component.find({ name: 'question' });
    const textArea = component.find('textarea');

    textField.simulate('change', { target: { value: 'Who is the biggest tire manufacturer in the world?' } });
    // textArea.simulate('change', { target: { value: 'Lego, they even were in the Guiness Book of World Records with it'}});

    expect(textField).toBeDefined();
    expect(textArea).toBeDefined();

    expect(textField.get(0).props.value).toBe('Who is the biggest tire manufacturer in the world?');
  });
});