import React from 'react';
import {connect} from 'react-redux';

const render = (state) => {
  let arr = state.pager.ljText.split('\r\n');
  let currentPage = '-' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    return <div key={idx}>{line}</div>;
  });
  return (
    <span id="ljRender">
      <div id="ljTitle">LJ{currentPage}</div>
      <div id="ljText">{output}</div>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const TextLj = connect(mapStateToProps)(render);

export default TextLj;
