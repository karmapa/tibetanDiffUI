import React, {Component} from 'react';
import TextLj from '../containers/TextLj.js';
import TextDg from '../containers/TextDg.js';
import TextDiffed from '../containers/TextDiffed.js';
import Resizable from 'react-resizable-box';

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <Resizable
          width="33%"
          minWidth={90}
        >
          <TextLj />
        </Resizable>
        <TextDg />
        <Resizable
          width="33%"
          minWidth={90}
        >
          <TextDiffed />
        </Resizable>
      </div>
    )
  }
}
