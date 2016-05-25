import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {closeDiffedText} from '../reducers/pager.js';
import * as JsDiff from 'diff';
import Resizable from 'react-resizable-box';

class DiffedTextContainer extends Component {
  diff(oldText, newText) {
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
  }

  drawColor(arr, idx) {
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
  }

  paneClose() {
    store.dispatch(closeDiffedText());
  }

  render() {
    let newTextNoLinebreak = this.props.pager.newText.replace(/\r\n/g, '');
    let arr = this.diff(this.props.pager.oldText, newTextNoLinebreak);
    let output = arr.map(this.drawColor);
    let resizable = true;
    if (this.props.pager.paneDiffedText) {
      if ((2 === this.props.pager.openPane && this.props.pager.paneOldText) || 1 === this.props.pager.openPane){
        return (
          <span id="diffedRender">
            <div id="diffedTitle" onClick={this.paneClose}>Diffed-</div>
            <div id="diffedText">{output}</div>
          </span>
        );
      } else {
        return (
          <Resizable width="" minWidth={100} height="100%" isResizable={{top:false, right:false, bottom:false, left:resizable, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
            <span id="diffedRender">
                <div id="diffedTitle" onClick={this.paneClose}>Diffed-</div>
              <div id="diffedText">{output}</div>
            </span>
          </Resizable>
        );
      }
    } else {
      return (
        <span className="titleClose" onClick={this.paneClose}>+Diffed</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const DiffedText = connect(mapStateToProps)(DiffedTextContainer);

export default DiffedText;
