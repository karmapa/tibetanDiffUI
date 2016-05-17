import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import store from '../store/store.js';
import {themeSwitch} from '../reducers/pager.js';

const onThemeSwitch = (style) => {
  store.dispatch(themeSwitch(style));
};

const render = () => {
  return (
    <div id="themeSelector">
      <DropdownButton title="Theme" id="themeDropdown">
        <MenuItem id="themeDefault" onClick={() => {onThemeSwitch('Default');}} />
        <MenuItem id="themeGreen" onClick={() => {onThemeSwitch('Green');}} />
        <MenuItem id="themeBlack" onClick={() => {onThemeSwitch('Black');}} />
      </DropdownButton>
    </div>
  );
};

export default render;
