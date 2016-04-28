import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';

const render = (state) => {
  return (
    <div>{state.pager.ljText}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const LjText = connect(mapStateToProps)(render)

export default LjText;