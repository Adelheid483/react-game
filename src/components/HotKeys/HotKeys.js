import React from 'react';
import './HotKeys.scss';

export default function HotKeys() {
  return (
    <section className="hot-keys">
      <div className="container">
        <h1>Hot Keys</h1>
        <hr/>
        <div className="hot-keys-list">
          <span>New Game <span className="hot-keys-item">A</span></span>
          <span>Best score: <span className="hot-keys-item">B</span></span>
        </div>
      </div>
    </section>
  )
}
