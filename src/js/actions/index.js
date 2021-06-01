import { ADD_ARTICLE, DATA_LOADED, REMOVE_ARTICLE, RESTORE_ARTICLE } from 'js/constants/action-types';

export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};

export const removeArticle = (payload) => {
  return { type: REMOVE_ARTICLE, payload };
};

export const restoreArticle = (payload) => {
  return { type: RESTORE_ARTICLE, payload };
};

export const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      response.json()
    })
    .then(json => {
      return {
        type: DATA_LOADED,
        payload: json
      }
    });
};
