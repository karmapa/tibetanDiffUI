import 'babel-polyfill';
import './index.css';
import 'bootstrap-css';
import './../assets/img/logo.png';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.js';

render(
    <App />,
  document.getElementById('root')
)