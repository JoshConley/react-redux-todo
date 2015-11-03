import React, { Component } from 'react';

// Components
import TodoItem from './TodoItem';

class TodoList extends Component {
  renderTodo(todo, actions) {
    return (
      <TodoItem
          key={todo.id}
          todo={todo}
          {...actions}
      />
    );
  }

  render() {
    const { todos, actions } = this.props;

    const filteredTodos = {
      incomplete: todos.filter((todo) => !todo.completed),
      complete: todos.filter((todo) => todo.completed)
    };

    return (
      <section className="TodoList">
        {filteredTodos.incomplete.map((todo) => {
          return this.renderTodo(todo, actions);
        })}
        {filteredTodos.complete.map((todo) => {
          return this.renderTodo(todo, actions);
        })}
      </section>
    );
  }
}

export default TodoList;
