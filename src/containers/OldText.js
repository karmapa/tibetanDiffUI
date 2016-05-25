import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {closeOldText} from '../reducers/pager.js';
import CodeMirror from 'react-codemirror';
import Resizable from 'react-resizable-box';

class OldTextContainer extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        mode: 'text',
        lineNumbers: true,
        lineWrapping: true,
        readOnly: true
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      (nextProps.pager.currentPage !== this.props.pager.currentPage) ||
      (nextProps.pager.paneOldText !== this.props.pager.paneOldText) ||
      (nextProps.pager.paneNewText !== this.props.pager.paneNewText) ||
      (nextProps.pager.paneDiffedText !== this.props.pager.paneDiffedText) ||
      (nextProps.pager.openPane !== this.props.pager.openPane)
    );
  }

  paneClose() {
    store.dispatch(closeOldText());
  }

  render() {
    let name = this.props.pager.oldTextName;
    let currentPage = '-' + this.props.pager.currentPage;
    let paneWidth = '33%';
    let resizable = true;
    if (1 === this.props.pager.openPane) {
      paneWidth = '100%';
      resizable = false;
    } else if (2 === this.props.pager.openPane) {
      paneWidth = '50%';
    }
    if (this.props.pager.paneOldText) {
      return (
        <Resizable width={paneWidth} minWidth={100} height="100%" isResizable={{top:false, right:resizable, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
          <span id="oldRender">
            <div id="oldTitle" onClick={this.paneClose}>{name}{currentPage}-</div>
            <CodeMirror value={this.props.pager.oldText} options={this.state.options} />
          </span>
        </Resizable>
      );
    } else {
      return (
        <span className="titleClose" onClick={this.paneClose}>+{name}{currentPage}</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const OldText = connect(mapStateToProps)(OldTextContainer);

export default OldText;
