import chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';
import TodoItem from '../../src/components/TodoItem';

chai.use(spies);

function setup(newProps) {
  const props = Object.assign({
    todo: {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    toggleComplete: chai.spy()
  }, newProps);

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TodoItem {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: TodoItem', () => {
  it('should render to-do correctly', () => {
    const { output, props } = setup();
    expect(findWithType(output, 'input').props.checked).to.equal(props.todo.completed);
    expect(findWithType(output, 'span').props.children).to.equal(props.todo.text);
  });

  it('should call toggleComplete on change', () => {
    const { output, props } = setup();
    findWithType(output, 'input').props.onChange(props.todo.id);
    expect(props.toggleComplete).to.have.been.called.with(props.todo.id);
  });
});
