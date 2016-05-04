import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';

const render = (state) => {
  let arr = state.pager.dgText.split('\r\n');
  let currentPage = ' - ' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    return <div key={idx}>{line}</div>
  });
  return (
    <span id="dgRender">
      <div id="dgTitle">DG{currentPage}</div>
      <div id="dgText">{output}</div>
    </span>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const DgText = connect(mapStateToProps)(render)

export default DgText;