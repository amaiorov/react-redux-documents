import { ADD_ARTICLE } from 'js/constants/action-types';

export const emptyTitle = ({ dispatch }) => (next) => (action) => {
  if (action.type === ADD_ARTICLE) {
    if (!action.payload.title) {
      return dispatch({ type: 'EMPTY_TITLE' });
    }
  }
  return next(action);
}
