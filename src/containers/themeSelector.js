import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const render = () => {
  return (
    <div id="themeSelector">
      <DropdownButton title="Theme" id="themeDropdown" bsStyle={'Info'.toLowerCase()}>
        <MenuItem id="themeGreen" eventKey="themeGreen">Green</MenuItem>
        <MenuItem id="themeBlue" eventKey="themeBlue">Blue</MenuItem>
        <MenuItem id="themeBlack" eventKey="themeBlack">Black</MenuItem>
        <MenuItem id="themeYellow" eventKey="themeYellow">Yellow</MenuItem>
      </DropdownButton>
    </div>
  )
}

export default render;