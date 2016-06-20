import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal, ProgressBar} from 'react-bootstrap';
import store from '../store/store.js';
import {importModalControl} from '../reducers/pager.js';

class DataImportContainer extends Component {
  doImportModalControl(mode) {
    store.dispatch(importModalControl(mode));
  }

  dataImport(e) {
    let r = new FileReader;
    console.log(r);
    let file = e.target.files[0];
    r.onload = () => {
      let text = r.result;
      console.log(text);
    }
    r.readAsText(file);
  }

  render() {
    console.log(this.props.pager);
    let modalDisplay = 'modalClose';
    if (true === this.props.pager.importModalControl) {
      modalDisplay = 'modalOpen';
    }
    return (
      <div id="importer">
        <ButtonToolbar>
          <Button id="importButton" onClick={() => {this.doImportModalControl('open');}}>import</Button>
        </ButtonToolbar>
        <div id="importModal" className={modalDisplay}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Old Text:</h5>
              <input type="file" id="oldFileImport" onChange={this.dataImport}/>
              <h5>New Text:</h5>
              <input type="file" id="newFileImport" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {this.doImportModalControl('close');}}>Close</Button>
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
