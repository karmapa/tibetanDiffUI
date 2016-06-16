import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal, ProgressBar} from 'react-bootstrap';
import store from '../store/store.js';

class DataImportContainer extends Component {
  render() {
    return (
      <div id="importer">
        <ButtonToolbar>
          <Button id="importButton">import</Button>
        </ButtonToolbar>
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One fine body...
            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const DataImport = connect(mapStateToProps)(DataImportContainer);

export default DataImport;
