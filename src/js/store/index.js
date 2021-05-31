import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'js/reducers/';
import { emptyTitle } from 'js/middleware/';

const store = createStore(
  rootReducer,
  applyMiddleware(emptyTitle)
);

export default store;
