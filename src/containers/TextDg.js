import React from 'react';
import {connect} from 'react-redux';

const render = (state) => {
  let arr = state.pager.dgText.split('\r\n');
  let currentPage = '-' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    if ('' === line) {
      return;
    }
    return <div key={idx}><span key={idx}>{idx + 1}</span>{line}</div>;
  });
  return (
    <span id="dgRender">
      <div id="dgTitle">DG{currentPage}</div>
      <div id="dgText">{output}</div>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const TextDg = connect(mapStateToProps)(render);

export default TextDg;
