import React, {Component} from 'react';
import LjText from '../containers/ljText.js';
import DgText from '../containers/dgText.js';
import DiffedText from '../containers/diffedText.js'

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <span id="ljRender">
          <div id="ljTitle">LJ</div>
          <div id="ljText">
          <LjText />
          </div>
        </span>
        <span id="dgRender">
          <div id="dgTitle">DG</div>
          <div id="dgText">
          <DgText />
          </div>
        </span>
        <span id="diffedRender">
          <div id="diffedTitle">Diffed</div>
          <div id="diffedText">
          <DiffedText />
          </div>
        </span>
      </div>
    )
  }
}