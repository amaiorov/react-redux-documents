import { ADD_ARTICLE, REMOVE_ARTICLE, RESTORE_ARTICLE, EMPTY_TITLE, DATA_LOADED } from 'js/constants/action-types';

const initialState = {
  articles: [
    { title: 'test1', id: 1 },
    { title: 'test2', id: 2 },
    { title: 'test3', id: 3 }
  ],
  removedArticles: [],
  remoteArticles: []
};

const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_ARTICLE:
      // no title in payload
      if (!action.payload.title) {
        throw new Error('no title provided.');
      }
      
      // article with this id already exists
      const articleExists = state.articles.find(item => item.id === action.payload.id);
      if (articleExists) {
        throw new Error('article already exists.');
      }

      // use id from payload OR
      // if does note exists, merge articles and removed articles sort by id asc, take the biggest id + 1; this will be new id
      action.payload.id = action.payload.id || [...state.articles, ...state.removedArticles].sort((a, b) => a.id - b.id)[state.articles.length + state.removedArticles.length - 1].id + 1;

      newState = {
        ...state,
        articles: state.articles.concat(action.payload)
      };
      break;
    case REMOVE_ARTICLE:
      // no id in payload
      if (!action.payload.id) {
        throw new Error('no id provided.');
      }

      // article does not exist in removed articles
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
      // no id in payload
      if (!action.payload.id) {
        throw new Error('no id provided.');
      }

      // article to move restore
      const restoredArticle = state.removedArticles.find(item => item.id === action.payload.id);

      newState = {
        ...state,
        articles: state.articles.concat(restoredArticle),
        removedArticles: state.removedArticles.filter(item => item.id !== action.payload.id)
      };
      break;
    case DATA_LOADED:
      newState = {
        ...state,
        remoteArticles: state.remoteArticles.concat(action.payload)
      };
      break;
    case EMPTY_TITLE:
      alert('Title cannot be empty');
    default:
      newState = state;
  }
  return newState;
};

export default rootReducer;
