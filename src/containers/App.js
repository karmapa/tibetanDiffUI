import React, {Component} from 'react';
import PageSelector from './PageSelector.js';
import ThemeSelector from './ThemeSelector.js';
import DataImport from './DataImport.js';
import {connect} from 'react-redux';
import Diff from './Diff.js';

class AppContainer extends Component {
  render() {
    return (
      <div id="theme" className={this.props.themeStyle}>
        <header id="logoArea">
          <span>
            <div id="logoTitle">經文比對系統</div>
          </span>
          <div id="titleRight">
            <DataImport />
            <PageSelector />
            <ThemeSelector />
          </div>
        </header>
        <Diff />
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
