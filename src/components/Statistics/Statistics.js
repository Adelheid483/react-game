import React from 'react';
import './Statistics.scss';

export default function Statistics(props) {
  return (
    <section className="statistics">
      <div className="container">
        <h1>Statistics</h1>
        <hr/>
        <ul className="page-list">
          <li>Last score: <span className="page-list-item">{10}</span></li>
          <li>Best score: <span className="page-list-item">{20}</span></li>
        </ul>
      </div>
    </section>
  )
}
