import { ADD_ARTICLE } from 'js/constants/action-types';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;