import React, {Component} from 'react';
import {connect} from 'react-redux';
import OldText from '../containers/OldText.js';
import NewText from '../containers/NewText.js';
import DiffedText from '../containers/DiffedText.js';

class ShowDiffContainer extends Component {
  render() {
    let resizeBarLeft = <span className="resizeBar"></span>;
    let resizeBarRight = <span className="resizeBar"></span>;
    if (1 === this.props.pager.openPane) {
      resizeBarLeft = '';
      resizeBarRight = '';
    } else if (!this.props.pager.paneOldText) {
      resizeBarLeft = '';
    } else if (!this.props.pager.paneDiffedText || !this.props.pager.paneNewText) {
      resizeBarRight = '';
    }
    return (
      <div id="main">
        <OldText />
        {resizeBarLeft}
        <NewText />
        {resizeBarRight}
        <DiffedText />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const ShowDiff = connect(mapStateToProps)(ShowDiffContainer);

export default ShowDiff;
