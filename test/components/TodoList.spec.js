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
    expect(output.props.children[0].length).to.equal(1);
    expect(output.props.children[1].length).to.equal(1);

    expect(output.props.children[0][0].type).to.equal(TodoItem);
    expect(output.props.children[0][0].props.todo).to.equal(props.todos[0]);

    expect(output.props.children[1][0].type).to.equal(TodoItem);
    expect(output.props.children[1][0].props.todo).to.equal(props.todos[1]);
  });

  it('should render list correctly when complete order is switched', () => {
    const { output, props } = setup({
      todos: [
        {
          id: 0,
          text: 'Smell the grass',
          completed: true
        },
        {
          id: 1,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 2,
          text: 'Walk the dog',
          completed: true
        }
      ]
    });

    expect(output.props.children[0].length).to.equal(1);
    expect(output.props.children[1].length).to.equal(2);

    expect(output.props.children[0][0].type).to.equal(TodoItem);
    expect(output.props.children[0][0].props.todo).to.equal(props.todos[1]);

    expect(output.props.children[1][0].type).to.equal(TodoItem);
    expect(output.props.children[1][0].props.todo).to.equal(props.todos[0]);

    expect(output.props.children[1][1].type).to.equal(TodoItem);
    expect(output.props.children[1][1].props.todo).to.equal(props.todos[2]);
  });
});
