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

const drawColor = (arr, idx) => {
  let diffedDrawBlack = 'diffedDrawBlack';
  let color = diffedDrawBlack;
  if ('black' !== arr[0] && (arr[1].match(/[\u0f0b-\u0f12]/) || arr[1].match(/^[ ]+$/))) {
    return <span key={idx} id="diffedDrawBlack">{arr[1]}</span>;
  }
  if ('green' === arr[0]) {
    color = 'diffedDrawGreen';
  } else if ('red' === arr[0]) {
    color = 'diffedDrawRed';
  }
  if (arr[1].match(/^[\r\n]+$/)) {
    return <div key={idx + 50}></div>;
  } else if (arr[1].match(/^[\r\n]+/)) {
    arr[1] = arr[1].replace(/[\r\n]/, '');
    return <span key={idx + 100}><div key={idx + 50}></div><span key={idx} id={color} >{arr[1]}</span></span>;
  } else if (arr[1].match(/[\r\n]+$/)) {
    arr[1] = arr[1].replace(/[\r\n]/, '');
    return <span key={idx + 100}><span key={idx} id={color} >{arr[1]}</span><div key={idx + 50}></div></span>;
  } else {
    return <span key={idx + 100}><span key={idx} id={color} >{arr[1]}</span></span>;
  }
};

const render = (state) => {
  let newTextNoLinebreak = state.pager.newText.replace(/\r\n/g, '');
  let arr = diff(state.pager.oldText, newTextNoLinebreak);
  let output = arr.map(drawColor);
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
