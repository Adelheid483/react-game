import React from 'react'
import './Toolbar.scss'
import {cardsArray_1} from "../../assets/datas/cardsArray_1";
import {cardsArray_2} from "../../assets/datas/cardsArray_2";

import Timer from "../Timer/Timer";

export default function Toolbar({newGame, endGame, level, score, win, time, radioBtn, setRadioBtn, choosePics}) {

  return (
    <div className="toolbar">

      <div className="toolbar-btn">
        <button onClick={() => newGame()}>New Game</button>
        <button onClick={() => endGame()}>End Game</button>
      </div>

      <form className="toolbar-radio" >
        <div>
          <label>Cute pics</label>
          <input
            type="radio"
            title='Choose pics and press New Game'
            checked={radioBtn === 'set 1'}
            value='set 1'
            onChange={(event) => {
              setRadioBtn(event.target.value);
              choosePics(cardsArray_1);
            }}
          />
        </div>
        <div>
          <label>Sweet pics</label>
          <input
            type="radio"
            title='Choose pics and press New Game'
            checked={radioBtn === 'set 2'}
            value='set 2'
            onChange={(event) => {
              setRadioBtn(event.target.value);
              choosePics(cardsArray_2);
            }}
          />
        </div>
      </form>

      <div className="toolbar-info">
        <span className="level">Level: {level}</span>
        <span>Score: {score}</span>
        <span>Win: {win}</span>
        <Timer time={time}/>
      </div>
    </div>
  );
};
