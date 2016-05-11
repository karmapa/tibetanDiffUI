import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {pageNext, pagePre, pageInput, pageKeyPress} from '../reducers/pager.js';

const handleChange = (event) => {
  store.dispatch(pageInput(event.target.value));
};

const onPageKeyPress = (event) => {
  store.dispatch(pageKeyPress(event.key));
};

const onPageNext = () => {
  store.dispatch(pageNext());
};

const onPagePre = () => {
  store.dispatch(pagePre());
};

const render = (state) => {
  let warnPageInput = 'notWarn';
  if (state.pager.wrongPageInput) {
    warnPageInput = 'warn';
  }
  return (
    <div id="pageSelector">
      <button id="pageSelectLeft" onClick={onPagePre}>&larr;</button>
      <input id="pageInput" className={warnPageInput} value={state.pager.pageInput} onKeyPress={onPageKeyPress} onChange={handleChange}></input>
      <button id="pageSelectRight" onClick={onPageNext}>&rarr;</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const PageSelector = connect(mapStateToProps)(render);

export default PageSelector;
