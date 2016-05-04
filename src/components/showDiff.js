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
          minWidth={90}
        >
          <LjText />
        </Resizable>
        <DgText />
        <Resizable
          width="33%"
          minWidth={90}
        >
          <DiffedText />
        </Resizable>
      </div>
    )
  }
}