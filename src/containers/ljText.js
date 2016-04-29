import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';

const render = (state) => {
  let arr = state.pager.ljText.split('\r\n');
  let output = arr.map((line) => {
    return (
      <div>{line}</div>
    )
  })
  return (
    <div>{output}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const LjText = connect(mapStateToProps)(render)

export default LjText;