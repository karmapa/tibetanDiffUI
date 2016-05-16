import React, {Component} from 'react';
import OldText from '../containers/OldText.js';
import NewText from '../containers/NewText.js';
import DiffedText from '../containers/DiffedText.js';

export default class ShowDiff extends Component {
  render() {
    return (
      <div id="main">
        <OldText />
        <NewText />
        <DiffedText />
      </div>
    );
  }
}
