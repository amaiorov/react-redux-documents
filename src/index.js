import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'js/store/';
import './index.css';
import App from 'js/components/App';
import index from './js/';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

