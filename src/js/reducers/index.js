import { removeArticle } from 'js/actions';
import { ADD_ARTICLE, REMOVE_ARTICLE } from 'js/constants/action-types';

const initialState = {
  articles: [
    { title: 'test1', id: 1 },
    { title: 'test2', id: 2 },
    { title: 'test3', id: 3 }
  ],
  removedArticles: []
};

function rootReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_ARTICLE:
      const articleExists = state.articles.find(item => item.id === action.payload.id);
      if (articleExists) {
        throw new Error('article already exists.');
      }

      newState = {
        ...state,
        articles: state.articles.concat(action.payload)
      };
      break;
    case REMOVE_ARTICLE:
      const removedArticle = state.articles.find(item => item.id === action.payload.id );
      if (!removedArticle) {
        throw new Error('article not found.');
      }

      newState = {
        ...state,
        articles: state.articles.filter(item => item.id !== action.payload.id),
        removedArticles: state.removedArticles.concat(removedArticle)
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default rootReducer;
