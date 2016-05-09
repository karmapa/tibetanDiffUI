import React, {Component} from 'react';
import OldText from '../containers/OldText.js';
import NewText from '../containers/NewText.js';
import DiffedText from '../containers/DiffedText.js';
import Resizable from 'react-resizable-box';

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <Resizable width="33%" minWidth={90} height="100%" isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
          <OldText />
        </Resizable>
        <NewText />
        <Resizable width="33%" minWidth={90} height="100%" isResizable={{top:false, right:false, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
          <DiffedText />
        </Resizable>
      </div>
    );
  }
}
