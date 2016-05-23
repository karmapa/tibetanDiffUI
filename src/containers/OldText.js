import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    return nextProps.pager.currentPage !== this.props.pager.currentPage;
  }

  render() {
    let name = this.props.pager.oldTextName;
    let currentPage = '-' + this.props.pager.currentPage;
    return (
      <Resizable width="33%" minWidth={100} isResizable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
        <span id="oldRender">
          <div id="oldTitle">{name}{currentPage}<div className="closeRender">+</div></div>
          <CodeMirror value={this.props.pager.oldText} options={this.state.options} />
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

const OldText = connect(mapStateToProps)(OldTextContainer);

export default OldText;
