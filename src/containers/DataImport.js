import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal, ProgressBar} from 'react-bootstrap';
import store from '../store/store.js';
import {importModalControl, fileImport} from '../reducers/pager.js';
import splitPb from '../processor/splitPb.js';

class DataImportContainer extends Component {
  doImportModalControl(mode) {
    store.dispatch(importModalControl(mode));
  }

  dataImport(e) {
    let fileState = e.target.id;
    let fileName = e.target.value.split(/(\\|\/)/g).pop().split('.')[0];
    let r = new FileReader();
    let file = e.target.files[0];
    r.onload = () => {
      let text = r.result;
      let splited = splitPb.splitLjPb(text);
      let fileObj = {};
      fileObj[fileName] = splited;
      if ('oldFileImport' === fileState) {
        store.dispatch(fileImport(fileObj, 0));
      } else if ('newFileImport' === fileState) {
        store.dispatch(fileImport(fileObj, 1));
      } else {
        console.log('failed');
      }
    };
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
              <input type="file" id="oldFileImport" onChange={this.dataImport} />
              <h5>New Text:</h5>
              <input type="file" id="newFileImport" onChange={this.dataImport} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {this.doImportModalControl('remove');}}>Remove Import</Button>
              <Button onClick={() => {this.doImportModalControl('cancel');}}>Cancel</Button>
              <Button bsStyle="primary" onClick={() => {this.doImportModalControl('import');}}>Import</Button>
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
