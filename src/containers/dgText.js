import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';

const render = (state) => {
  return (
    <div>{state.pager.dgText}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const DgText = connect(mapStateToProps)(render)

export default DgText;