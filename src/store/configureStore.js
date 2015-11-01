import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initalState) {
  const store = createStore(rootReducer, initalState);

  return store;
}
