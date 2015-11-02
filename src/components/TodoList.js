import React, { Component } from 'react';

// Components
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <section className="TodoList">
        {todos.map((todo) => {
          return (
            <TodoItem
                key={todo.id}
                todo={todo}
                {...actions}
            />
          );
        })}
      </section>
    );
  }
}

export default TodoList;
