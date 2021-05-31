import { ADD_ARTICLE } from 'js/constants/action-types';

export function emptyTitle({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        if (!action.payload.title) {
          return dispatch({ type: 'EMPTY_TITLE' });
        }
      }
      return next(action);
    }
  }
}
