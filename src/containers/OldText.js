require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

import React from 'react';
import {connect} from 'react-redux';
import Codemirror from 'react-codemirror';
import Resizable from 'react-resizable-box';

let options = {
  mode: 'text/html',
  lineNumbers: true,
  lineWrapping: true
};

const render = (state) => {
  let name = state.pager.oldTextName;
  let currentPage = '-' + state.pager.currentPage;
  return (
    <Resizable width="33%" minWidth={100} isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
      <span id="oldRender">
        <div id="oldTitle">{name}{currentPage}<div className="closeRender">+</div></div>
        <Codemirror id="oldC" value={state.pager.oldText} options={options} />
      </span>
    </Resizable>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const OldText = connect(mapStateToProps)(render);

export default OldText;
