require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CodeMirror from 'react-codemirror';
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
        <span id="oldRender">
          <div id="oldTitle">{name}{currentPage}<div className="closeRender">+</div></div>
          <CodeMirror value={this.props.pager.newText} options={this.state.options} />
        </span>
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
