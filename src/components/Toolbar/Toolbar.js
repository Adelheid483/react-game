import React from 'react'
import './Toolbar.scss'

export default function Toolbar(props) {

  return (
    <div className="toolbar">

      <button onClick={() => {
        props.startGame(props.size);
        props.zeroingScore();
        props.stopTimer();
        props.resetTimer();
        props.startTimer();
      }}>
        New Game
      </button>

      <div className="toolbar-info">
        <span>Score: {props.score}</span>
        <span>Win: {props.win}</span>
        <div>
          <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>
        </div>
      </div>

    </div>
  )
};
