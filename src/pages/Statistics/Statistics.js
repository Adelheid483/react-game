import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Statistics.scss';
import Timer from "../../components/Timer/Timer";

export default function Statistics() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  let lastScore = localStorage.getItem('lastScore');
  let lastTime = localStorage.getItem('lastTime');

  function getScores() {
    let statistics = new Array(10);
    statistics.fill({
      s: 0,
      t: 0,
    });
    if (localStorage.getItem('previousResults') !== null) {
      let localArr = JSON.parse(localStorage.getItem('previousResults'));
      statistics = statistics.slice(localArr.length, 10);
      statistics = [...localArr.reverse(), ...statistics];
      return statistics;
    } else {
      return statistics;
    }
  }
  const statistics = getScores();

  return (
    <section className="statistics" style={themeStyles}>
      <div className="container">
        <h1>Statistics</h1>
        <hr/>
        <ul className="page-list last-game"> Last Game
          <li>Total score: <span className="page-list-item">{lastScore}</span></li>
          <li>Total time: <Timer time={lastTime} /></li>
        </ul>
        <ul className="page-list previous-games"> Previous Games
          {statistics.map((item, key) => {
            key++;
            return (
              <li key={key}>
                Game {key}: <span className="page-list-item">{item.s || 0}</span> / <Timer time={item.t || 0} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
