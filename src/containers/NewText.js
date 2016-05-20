require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Codemirror from 'react-codemirror';
import Resizable from 'react-resizable-box';

class NewTextContainer extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        mode: 'text/html',
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        readOnly: true
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.pager.currentPage !== this.props.pager.currentPage;
  }

  render() {
    let name = this.props.pager.newTextName;
    let currentPage = '-' + this.props.pager.currentPage;
    return (
      <Resizable width="33%" minWidth={100} isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
        <span id="oldRender">
          <div id="oldTitle">{name}{currentPage}<div className="closeRender">+</div></div>
          <Codemirror value={this.props.pager.newText} options={this.state.options} />
        </span>
      </Resizable>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const NewText = connect(mapStateToProps)(NewTextContainer);

export default NewText;
