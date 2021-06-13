import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'js/reducers/';
import { emptyTitle } from 'js/middleware/';
import thunk from 'redux-thunk';

const composedEnhancers = compose(applyMiddleware(emptyTitle, thunk));

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;
