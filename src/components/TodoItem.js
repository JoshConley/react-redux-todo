import React , { Component, PropTypes } from 'react';

class TodoItem extends Component {
  render () {
    const { todo, toggleComplete } = this.props;

    return (
      <div>
        <label>
          <input
              checked={todo.completed}
              onChange={() => { toggleComplete(todo.id); }}
              type="checkbox"
          />
          <span>{todo.text}</span>
        </label>
      </div>
    );
  }
}

TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default TodoItem;
