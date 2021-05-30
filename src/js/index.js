import store from 'js/store/index';
import { addArticle, removeArticle } from 'js/actions/index';

window.store = store;
window.addArticle = addArticle;
window.removeArticle = removeArticle;
