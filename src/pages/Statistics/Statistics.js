import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Statistics.scss';
import Timer from "../../components/Timer/Timer";

export default function Statistics(props) {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  let lastScore = localStorage.getItem('lastScore');
  let lastTime = localStorage.getItem('lastTime');

  function getScores() {
    if (localStorage.getItem('previousResults') !== null) {
      let statistics = JSON.parse(localStorage.getItem('previousResults'));
      return statistics.slice(-11, -1).reverse();
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
        <ul className="page-list previous-games"> Previous games scores
          {statistics.map((item, key) => {
            key++;
            return (
              <li key={key}>
                Game: <span className="page-list-item">{item.s || 0}</span> / <Timer time={item.t || 0} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
