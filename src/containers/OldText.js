import React from 'react';
import {connect} from 'react-redux';

const render = (state) => {
  let arr = state.pager.oldText.split('\r\n');
  let name = state.pager.oldTextName;
  let currentPage = '-' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    return <div key={idx}>{line}</div>;
  });
  return (
    <span id="oldRender">
      <div id="oldTitle">{name}{currentPage}</div>
      <div id="oldText">{output}</div>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const OldText = connect(mapStateToProps)(render);

export default OldText;
