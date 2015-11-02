import { expect } from 'chai';
import todos from '../../src/reducers/todos';
import * as act from '../../src/constants/ActionTypes';

describe('Reducer: To-Dos', () => {
  it('should return the inital state when previous state is empty', () => {
    expect(
      todos(undefined, {})
    ).to.deep.equal([
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ]);
  });

  it('should add a to-do', () => {
    expect(
      todos([], {
        type: act.ADD_TODO,
        text: 'Walk the dog'
      })
    ).to.deep.equal([
      {
        id: 0,
        text: 'Walk the dog',
        completed: false
      }
    ]);

    expect(
      todos(
        [
          {
            id: 0,
            text: 'Walk the dog',
            completed: false
          }
        ], {
          type: act.ADD_TODO,
          text: 'Feed the cat'
        }
      )
    ).to.deep.equal([
      {
        id: 0,
        text: 'Walk the dog',
        completed: false
      },
      {
        id: 1,
        text: 'Feed the cat',
        completed: false
      }
    ]);
  });

  it('should edit a todo', () => {
    expect(
      todos(
        [
          {
            id: 0,
            text: 'Walk the dog',
            completed: false
          },
          {
            id: 1,
            text: 'Feed the cat',
            completed: false
          }
        ], {
          type: act.EDIT_TODO,
          id: 1,
          text: 'Meet the cat'
        }
      )
    ).to.deep.equal([
      {
        id: 0,
        text: 'Walk the dog',
        completed: false
      },
      {
        id: 1,
        text: 'Meet the cat',
        completed: false
      }
    ]);
  });

  it('should mark todo as complete', () => {
    expect(
      todos(
        [
          {
            id: 0,
            text: 'Walk the dog',
            completed: false
          },
          {
            id: 1,
            text: 'Feed the cat',
            completed: false
          }
        ], {
          type: act.TOGGLE_COMPLETE,
          id: 1
        }
      )
    ).to.deep.equal([
      {
        id: 0,
        text: 'Walk the dog',
        completed: false
      },
      {
        id: 1,
        text: 'Feed the cat',
        completed: true
      }
    ]);
  });

  it('should clear a todo', () => {
    expect(
      todos(
        [
          {
            id: 0,
            text: 'Walk the dog',
            completed: false
          },
          {
            id: 1,
            text: 'Feed the cat',
            completed: false
          }
        ], {
          type: act.CLEAR_TODO,
          id: 0
        }
      )
    ).to.deep.equal([
      {
        id: 1,
        text: 'Feed the cat',
        completed: false
      }
    ]);
  });

  it('should clear all completed todos', () => {
    expect(
      todos(
        [
          {
            id: 0,
            text: 'Walk the dog',
            completed: true
          },
          {
            id: 1,
            text: 'Feed the cat',
            completed: false
          },
          {
            id: 2,
            text: 'Buy bread',
            completed: true
          }
        ], {
          type: act.CLEAR_COMPLETE
        }
      )
    ).to.deep.equal([
      {
        id: 1,
        text: 'Feed the cat',
        completed: false
      }
    ]);
  });
});
