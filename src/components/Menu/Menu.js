import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <menu className="Menu">
        <li>
          <div className="after"></div>
          <span>STAT</span>
          <div className="before"></div>
        </li>
        <li>
          <div className="after"></div>
          <span>INV</span>
          <div className="before"></div>
        </li>
        <li>
          <div className="after"></div>
          <span>DATA</span>
          <div className="before"></div>
        </li>
        <li>
          <div className="after"></div>
          <span>MAP</span>
          <div className="before"></div>
        </li>
        <li>
          <div className="after"></div>
          <span>RADIO</span>
          <div className="before"></div>
        </li>
    </menu>
  );
}

export default Menu;
