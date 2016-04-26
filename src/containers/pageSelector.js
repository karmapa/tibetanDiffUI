import React from 'react';
import Svg from '../../assets/img/svg.js';
import {FormGroup, FormControl} from 'react-bootstrap';

const render = () => {
  return (
    <span id="pageSelector">
    
    <button id="pageSelectLeft">{Svg.btnLeftSvg}</button>
    <input id="pageInput"></input>
    <button id="pageSelectRight">{Svg.btnRightSvg}</button>
   
    </span>
    )
}

export default render;