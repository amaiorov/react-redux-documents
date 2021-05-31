import { ADD_ARTICLE, REMOVE_ARTICLE, RESTORE_ARTICLE } from 'js/constants/action-types';

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
      if (!action.payload.title) {
        throw new Error('no title provided.');
      }
      const articleExists = state.articles.find(item => item.id === action.payload.id);
      if (articleExists) {
        throw new Error('article already exists.');
      }

      action.payload.id = action.payload.id || [...state.articles, ...state.removedArticles].sort((a, b) => a.id - b.id)[state.articles.length + state.removedArticles.length - 1].id + 1;

      newState = {
        ...state,
        articles: state.articles.concat(action.payload)
      };
      break;
    case REMOVE_ARTICLE:
      if (!action.payload.id) {
        throw new Error('no id provided.');
      }
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
    case RESTORE_ARTICLE:
      if (!action.payload.id) {
        throw new Error('no id provided.');
      }
      // const articleExists = state.articles.find(item => item.id === action.payload.id);
      // if (articleExists) {
      //   throw new Error('article already exists.');
      // }
      const restoredArticle = state.removedArticles.find(item => item.id === action.payload.id);

      console.log([...state.articles, ...state.removedArticles].map(item => item.id));

      newState = {
        ...state,
        articles: state.articles.concat(restoredArticle),
        removedArticles: state.removedArticles.filter(item => item.id !== action.payload.id)
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default rootReducer;
