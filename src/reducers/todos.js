import * as act from '../constants/ActionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable([
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }
]);

export default function todos(state = initialState, action) {
  switch (action.type) {
    case act.ADD_TODO:
      return Immutable([
        ...state,
        {
          id: state.reduce((max, todo) => Math.max(todo.id, max), -1) + 1,
          text: action.text,
          completed: false
        }
      ]);
    case act.EDIT_TODO:
      return Immutable(state.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, {
            text: action.text
          })
        : todo;
      }));
    case act.CLEAR_TODO:
      return Immutable(state.filter((todo) => {
        return todo.id !== action.id;
      }));
    case act.TOGGLE_COMPLETE:
      return Immutable(state.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, {
            completed: !todo.completed
          })
        : todo;
      }));
    case act.CLEAR_COMPLETE:
      return Immutable(state.filter((todo) => {
        return !todo.completed;
      }));
    default:
      return state;
  }
}
