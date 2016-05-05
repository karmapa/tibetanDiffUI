import 'babel-polyfill';
import './index.css';
import 'bootstrap-css';
import './../assets/img/logo.png';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import store from './store/store.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
