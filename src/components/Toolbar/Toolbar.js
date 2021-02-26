import React from 'react'
import './Toolbar.scss'

import Timer from "../Timer/Timer";

export default function Toolbar({newGame, endGame, level, score, win, time}) {

  return (
    <div className="toolbar">

      <div className="toolbar-btn">
        <button onClick={() => newGame()} title="N">New Game</button>
        <button onClick={() => endGame()} title="Esc">End Game</button>
      </div>

      <div className="toolbar-info">
        <span className="level">Level: {level}</span>
        <span>Score: {score}</span>
        <span>Win: {win}</span>
        <Timer time={time}/>
      </div>

    </div>
  );
};
