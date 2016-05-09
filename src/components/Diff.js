import React, {Component} from 'react';
import LjText from '../containers/LjText.js';
import DgText from '../containers/DgText.js';
import DiffedText from '../containers/DiffedText.js';
import Resizable from 'react-resizable-box';

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <Resizable width="33%" minWidth={90} isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
          <LjText />
        </Resizable>
        <DgText />
        <Resizable width="33%" minWidth={90} isResizable={{top:false, right:false, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
          <DiffedText />
        </Resizable>
      </div>
    );
  }
}
