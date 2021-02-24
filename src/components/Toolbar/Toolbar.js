import React from 'react'
import './Toolbar.scss'

import Timer from "../Timer/Timer";

export default function Toolbar({startGame, zeroingScore, stopTimer, resetTimer, startTimer, level, size, score, win, time}) {

  return (
    <div className="toolbar">

      <div className="toolbar-btn">
        <button onClick={() => {
          startGame(size); // !!!!!!!!!!!!!!!!----------------------
          zeroingScore();
          stopTimer();
          resetTimer();
          startTimer();
        }}>
          New Game
        </button>
        <button>Sound</button>
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
