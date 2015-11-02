import React, { Component, PropTypes } from 'react';

class TodoCreateInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: ''
    };
  }

  doChange(e) {
    this.setState({ text: e.target.value });
  }

  doSubmit(e) {
    const text = e.target.value.trim();

    if (e.which === 13 && text) {
      this.props.addTodo(text);
      this.setState({ text: '' });
      // e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <input
            autoFocus="true"
            className="TodoCreateInput-input"
            onChange={this.doChange.bind(this)}
            onKeyDown={this.doSubmit.bind(this)}
            type="text"
            value={this.state.text}
        />
      </div>
    );
  }
}

TodoCreateInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoCreateInput;
