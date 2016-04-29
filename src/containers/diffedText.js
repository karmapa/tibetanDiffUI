import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import * as JsDiff from 'diff';

const doDiff = (oldText, newText) => {
  let arr = [];
  let diffed = JsDiff.diffChars(oldText, newText);
  diffed.forEach((part) => {
    let color = part.added ? 'green':
      part.removed ? 'red' : 'black';
      arr.push([color, part.value]);
  });
  return arr;
}

const render = (state) => {
  let arr = doDiff(state.pager.ljText, state.pager.dgText);
  let output = arr.map((word, idx) => {
    if('black' != word[0] && word[1].match(/[\u0f0b-\u0f12\s]/)) return;
    let color = 'diffedDrawBlack';
    if('green' === word[0]) {
      color = 'diffedDrawGreen';
    }else if('red' === word[0]) {
      color = 'diffedDrawRed';
    }
    return <span key={idx} id={color} >{word[1]}</span>
  })
  return (
    <div>{output}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  }
}

const DiffedText = connect(mapStateToProps)(render)

export default DiffedText;