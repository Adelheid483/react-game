import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

export default function Header() {

  return (
    <header className="header">
      <div className="container">
        <h1>
          <NavLink to="/" title="Home (H)">Memory Game</NavLink>
        </h1>
        <ul>
          <li><NavLink to="/statistics" title="Statistics (Alt+S)"><i className="fas fa-list-ol"></i></NavLink></li>
          <li><NavLink to="/hotKeys" title="HotKeys (Alt+H)"><i className="fas fa-key"></i></NavLink></li>
          <li><NavLink to="/settings" title="Settings (Alt+A)"><i className="fas fa-cogs"></i></NavLink></li>
        </ul>
      </div>
    </header>
  )
}
