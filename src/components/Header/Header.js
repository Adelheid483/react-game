import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

export default function Header() {

  return (
    <header className="header">
      <div className="container">
        <h1>
          <NavLink to="/" title="H">Memory Game</NavLink>
        </h1>
        <ul>
          <li><NavLink to="/statistics" title="Alt+S">Statistics</NavLink></li>
          <li><NavLink to="/hotKeys" title="Alt+H">HotKeys</NavLink></li>
          <li><NavLink to="/settings" title="Alt+A">Settings</NavLink></li>
        </ul>
      </div>
    </header>
  )
}
