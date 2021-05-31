import { ADD_ARTICLE, REMOVE_ARTICLE, RESTORE_ARTICLE } from 'js/constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
};

export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload };
};

export function restoreArticle(payload) {
  return { type: RESTORE_ARTICLE, payload };
};
