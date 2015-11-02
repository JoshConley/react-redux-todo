import { expect } from 'chai';
import * as actions from '../../src/actions/todos';
import * as act from '../../src/constants/ActionTypes';

describe('Action: Todos', () => {
  it('should create ADD_TODO action', () => {
    expect(actions.addTodo('Walk the dog')).to.deep.equal({
      type: act.ADD_TODO,
      text: 'Walk the dog'
    });
  });

  it('should create EDIT_TODO action', () => {
    expect(actions.editTodo(1, 'Walk the dog')).to.deep.equal({
      type: act.EDIT_TODO,
      id: 1,
      text: 'Walk the dog'
    });
  });

  it('should create CLEAR_TODO action', () => {
    expect(actions.clearTodo(1)).to.deep.equal({
      type: act.CLEAR_TODO,
      id: 1
    });
  });

  it('should create TOGGLE_COMPLETE action', () => {
    expect(actions.toggleComplete(1)).to.deep.equal({
      type: act.TOGGLE_COMPLETE,
      id: 1
    });
  });

  it('should create CLEAR_COMPLETE action', () => {
    expect(actions.clearComplete()).to.deep.equal({
      type: act.CLEAR_COMPLETE
    });
  });
});
