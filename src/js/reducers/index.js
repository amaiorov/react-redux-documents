import { ADD_ARTICLE, REMOVE_ARTICLE } from 'js/constants/action-types';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_ARTICLE:
      newState = {
        ...state,
        articles: state.articles.concat(action.payload)
      };
      break;
    case REMOVE_ARTICLE:      
      newState = {
        ...state,
        articles: state.articles.filter(item => item.id !== action.payload.id)
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default rootReducer;
