import React , { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {
  render () {
    const { todo, toggleComplete } = this.props;

    return (
      <div>
        <div className={classnames(
          'TodoItem-checkbox', {
            'checked': todo.completed
          })}
        >
          <label>
            <input
                checked={todo.completed}
                onChange={() => { toggleComplete(todo.id); }}
                type="checkbox"
            />
          </label>
          <span>{todo.text}</span>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default TodoItem;
