import React from 'react'
import './Toolbar.scss'

const Toolbar = (props) => (
  <div className="toolbar">

    <button onClick={() => props.startGame(props.size)}>New Game</button>

    <div className="toolbar-info">
      <span>Score: {props.score}</span>
      <span>Win: {props.win}</span>
    </div>

  </div>
);

export default Toolbar
