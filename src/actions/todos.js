import * as act from '../constants/ActionTypes';

export function addTodo(text) {
  return { type: act.ADD_TODO, text };
}

export function editTodo(id, text) {
  return { type: act.EDIT_TODO, id, text };
}

export function clearTodo(id) {
  return { type: act.CLEAR_TODO, id };
}

export function toggleComplete(id) {
  return { type: act.TOGGLE_COMPLETE, id };
}

export function clearComplete() {
  return { type: act.CLEAR_COMPLETE };
}
