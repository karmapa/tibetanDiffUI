import React from 'react';
import {connect} from 'react-redux';

const render = (state) => {
  let arr = state.pager.newText.split('\r\n');
  let name = state.pager.newTextName;
  let currentPage = '-' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    if ('' === line) {
      return;
    }
    return <div key={idx}>{line}</div>;
  });
  return (
    <span id="newRender">
      <div id="newTitle">{name}{currentPage}</div>
      <div id="newText">{output}</div>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const NewText = connect(mapStateToProps)(render);

export default NewText;
