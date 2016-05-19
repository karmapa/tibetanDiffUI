require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

import React from 'react';
import {connect} from 'react-redux';
import Codemirror from 'react-codemirror';
import Resizable from 'react-resizable-box';

const hideRender = () => {

};

let options = {
  mode: 'text/html',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true
};

const render = (state) => {
  let name = state.pager.newTextName;
  let currentPage = '-' + state.pager.currentPage;
  return (
    <span id="newRender">
      <div id="newTitle">{name}{currentPage}<div className="closeRender">+</div></div>
      <Codemirror id="newC" value={state.pager.newText} options={options} />
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const NewText = connect(mapStateToProps)(render);

export default NewText;
