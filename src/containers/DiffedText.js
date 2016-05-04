import React from 'react';
import {connect} from 'react-redux';
import * as JsDiff from 'diff';

const diff = (oldText, newText) => {
  return JsDiff.diffChars(oldText, newText)
    .map(part => {
    if (part.added) {
      return ['green', part.value];
    }
    if (part.removed) {
      return ['red', part.value];
    }
    return ['black', part.value];
  });
};

const render = (state) => {
  let arr = diff(state.pager.ljText, state.pager.dgText);
  let output = arr.map((word, idx) => {
    if ('black' !== word[0] && word[1].match(/[\u0f0b-\u0f12\s]/)) {
      return;
    }
    let color = 'diffedDrawBlack';
    if ('green' === word[0]) {
      color = 'diffedDrawGreen';
    } else if ('red' === word[0]) {
      color = 'diffedDrawRed';
    }
    return <span key={idx} id={color} >{word[1]}</span>;
  });
  return (
    <span id="diffedRender">
      <div id="diffedTitle">Diffed</div>
      <div id="diffedText">{output}</div>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const DiffedText = connect(mapStateToProps)(render);

export default DiffedText;
