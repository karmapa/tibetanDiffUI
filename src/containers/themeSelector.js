import React from 'react';
import {DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap';

const render = () => {
  return (
    <ButtonToolbar>
      <DropdownButton title="Theme" id="dropdown-size-medium">
        <MenuItem eventKey="1">Green</MenuItem>
        <MenuItem eventKey="2">Blue</MenuItem>
        <MenuItem eventKey="3">Black</MenuItem>
        <MenuItem eventKey="4">Yellow</MenuItem>
      </DropdownButton>
    </ButtonToolbar>
  )
}

export default render;