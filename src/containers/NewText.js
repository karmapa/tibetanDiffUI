import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {closeNewText} from '../reducers/pager.js';
import CodeMirror from 'react-codemirror';

class NewTextContainer extends Component {
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

//  shouldComponentUpdate(nextProps, nextState) {
//    return (
//      (nextProps.pager.currentPage !== this.props.pager.currentPage) || (nextProps.pager.paneNewText !== this.props.pager.paneNewText)
//    );
//  }

  paneClose() {
    store.dispatch(closeNewText());
  }

  render() {
    let name = this.props.pager.newTextName;
    let currentPage = '-' + this.props.pager.currentPage;
    if (this.props.pager.paneNewText) {
      return (
          <span id="oldRender">
            <div id="oldTitle" onClick={this.paneClose}>{name}{currentPage}-</div>
            <CodeMirror value={this.props.pager.newText} options={this.state.options} />
          </span>
      );
    } else {
      return (
        <span id="newTitleClose" className="titleClose" onClick={this.paneClose}>+{name}{currentPage}</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const NewText = connect(mapStateToProps)(NewTextContainer);

export default NewText;
