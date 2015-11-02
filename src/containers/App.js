import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';

// Components
import TodoCreateInput from '../components/TodoCreateInput';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div className="container">
        <TodoCreateInput addTodo={actions.addTodo} />
        <TodoList
            actions={actions}
            todos={todos}
        />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
