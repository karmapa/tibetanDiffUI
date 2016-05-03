import React, {Component} from 'react';
import LjText from '../containers/ljText.js';
import DgText from '../containers/dgText.js';
import DiffedText from '../containers/diffedText.js';
import Resizable from 'react-resizable-box';

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <Resizable
          width="33%"
        >
          <span id="ljRender">
            <div id="ljTitle">LJ</div>
            <div id="ljText">
            <LjText />
            </div>
          </span>
        </Resizable>
        <span id="dgRender">
          <div id="dgTitle">DG</div>
          <div id="dgText">
          <DgText />
          </div>
        </span>
        <Resizable
          width="33%"
        >
          <span id="diffedRender">
            <div id="diffedTitle">Diffed</div>
            <div id="diffedText">
            <DiffedText />
            </div>
          </span>
        </Resizable>
      </div>
    )
  }
}