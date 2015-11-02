import chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../src/components/TodoList';
import TodoItem from '../../src/components/TodoItem';

chai.use(spies);

function setup(newProps) {
  const props = Object.assign({
    todos: [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Walk the dog',
        completed: true
      }
    ],
    toggleComplete: () => {}
  }, newProps);

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TodoList {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: TodoList', () => {
  it('should render list correctly', () => {
    const { output, props } = setup();
    expect(output.props.children.length).to.equal(2);
    output.props.children.forEach((item, i) => {
      expect(item.type).to.equal(TodoItem);
      expect(item.props.todo).to.deep.equal(props.todos[i]);
    });
  });
});
