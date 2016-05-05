import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import store from '../store/store.js';
import {themeSwitch} from '../actions/action.js';

const onThemeSwitch = (style) => {
  store.dispatch(themeSwitch(style));
  console.log(store.getState().pager.themeStyle);
};

const render = () => {
  return (
    <div id="themeSelector">
      <DropdownButton title="Theme" id="themeDropdown" bsStyle={'Info'.toLowerCase()}>
        <MenuItem id="themeGreen" onClick={() => {onThemeSwitch('Green');}}>Green</MenuItem>
        <MenuItem id="themeBlue" onClick={() => {onThemeSwitch('Blue');}}>Blue</MenuItem>
        <MenuItem id="themeBlack" onClick={() => {onThemeSwitch('Black');}}>Black</MenuItem>
        <MenuItem id="themeYellow" onClick={() => {onThemeSwitch('Yellow');}}>Yellow</MenuItem>
      </DropdownButton>
    </div>
  );
};

export default render;
