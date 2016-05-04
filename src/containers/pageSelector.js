import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {pageNext, pagePre, pageInput} from '../actions/action.js';

const handleChange = (event) => {
  console.log('onChange:' + event.target.value);
  store.dispatch(pageInput(event.target.value));
}

const onPageNext = () => {
  store.dispatch(pageNext());
  if(store.getState().pager.warnNext) {
    alert(store.getState().pager.currentPage + ' 是最後一頁');
  }
}

const onPagePre = () => {
  store.dispatch(pagePre());
  if(store.getState().pager.warnPre) {
    alert(store.getState().pager.currentPage + ' 是第一頁');
  }
}

const render = (state) => {
  return (
    <div id="pageSelector">
      <button id="pageSelectLeft" onClick={() => {onPagePre()}}>&larr;</button>
      <input id="pageInput" value={state.pager.pageInput} onChange={handleChange}></input>
      <button id="pageSelectRight" onClick={() => {onPageNext()}}>&rarr;</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const PageSelector = connect(mapStateToProps)(render)

export default PageSelector;