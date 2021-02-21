import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Memory Game</h1>
        <ul>
          <li>Statistics</li>
          <li>Sound</li>
        </ul>
      </div>
    </header>
  )
}
