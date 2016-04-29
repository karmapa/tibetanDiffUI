import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {changeTheme} from './changeTheme.js';

const render = () => {
  return (
    <div id="themeSelector">
      <DropdownButton title="Theme" id="themeDropdown" bsStyle={'Info'.toLowerCase()}>
        <MenuItem id="themeGreen" eventKey="themeGreen" onClick={() => {changeTheme('green')}}>Green</MenuItem>
        <MenuItem id="themeBlue" eventKey="themeBlue" onClick={() => {changeTheme('blue')}}>Blue</MenuItem>
        <MenuItem id="themeBlack" eventKey="themeBlack" onClick={() => {changeTheme('black')}}>Black</MenuItem>
        <MenuItem id="themeYellow" eventKey="themeYellow" onClick={() => {changeTheme('yellow')}}>Yellow</MenuItem>
      </DropdownButton>
    </div>
  )
}

export default render;