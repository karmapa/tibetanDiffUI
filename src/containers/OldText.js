import React from 'react';
import {connect} from 'react-redux';
import Resizable from 'react-resizable-box';

const render = (state) => {
  let arr = state.pager.oldText.split('\r\n');
  let name = state.pager.oldTextName;
  let currentPage = '-' + state.pager.currentPage;
  let output = arr.map((line, idx) => {
    return <div key={idx}>{line}</div>;
  });
  return (
    <Resizable width="33%" minWidth={100} height="100%" isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
      <span id="oldRender">
        <div id="oldTitle">{name}{currentPage}<div className="closeRender">+</div></div>
        <div id="oldText">{output}</div>
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
