import React, {Component} from 'react';
import PageSelector from '../containers/pageSelector.js';
import ThemeSelector from '../containers/themeSelector.js';
import ShowDiff from './showDiff.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <header id="logoArea">
          <img id="logo" src="./logo.png" alt="logo" />
          <span id="logoTitle">正法寶藏工作室</span>
          <div id="titleRight">
            <PageSelector />
            <ThemeSelector />
          </div>
        </header>
        <ShowDiff />
      </div>
    );
  }
}

