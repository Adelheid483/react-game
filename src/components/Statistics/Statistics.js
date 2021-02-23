import React from 'react';
import './Statistics.scss';

export default function Statistics() {
  return (
    <section className="statistics">
      <div className="container">
        <h1>Statistics</h1>
        <hr/>
        <div className="statistics-list">
          <span>Last score: <span className="statistics-item">{10}</span></span>
          <span>Best score: <span className="statistics-item">{20}</span></span>
        </div>
      </div>
    </section>
  )
}
