import React , { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {
  render () {
    const { todo, toggleComplete } = this.props;

    return (
      <div>
        <label className={classnames(
          'TodoItem-checkbox', {
            'checked': todo.completed
          })}
        >
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
