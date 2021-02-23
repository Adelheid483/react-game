import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <NavLink to="/">Memory Game</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/hotKeys">Hot Keys</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
