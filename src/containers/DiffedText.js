import React from 'react';
import {connect} from 'react-redux';
import * as JsDiff from 'diff';
import Resizable from 'react-resizable-box';

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
  let newTextNoLinebreak = state.pager.newText.replace(/\r\n/g, '');
  let arr = diff(state.pager.oldText, newTextNoLinebreak);
  let output = arr.map((word, idx) => {
    if ('black' !== word[0] && (word[1].match(/[\u0f0b-\u0f12]/) || word[1].match(/^[\s]+$/))) {
      return <span key={idx} id="diffedDrawBlack" >{word[1]}</span>;
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
    <Resizable width="33%" minWidth={100} height="100%" isResizable={{top:false, right:false, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
      <span id="diffedRender">
        <div id="diffedTitle">Diffed<div className="closeRender">+</div></div>
        <div id="diffedText">{output}</div>
      </span>
    </Resizable>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const DiffedText = connect(mapStateToProps)(render);

export default DiffedText;
