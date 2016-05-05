import React, {Component} from 'react';
import PageSelector from './PageSelector.js';
import ThemeSelector from './ThemeSelector.js';
import {connect} from 'react-redux';
import ShowDiff from '../components/Diff.js';

class AppContainer extends Component {
  render() {
    return (
      <div id="theme" className={this.props.themeStyle}>
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

const mapStateToProps = (state) => {
  return {
    themeStyle: state.pager.themeStyle
  };
};

const App = connect(mapStateToProps)(AppContainer);

export default App;
