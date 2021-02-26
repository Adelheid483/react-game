import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Statistics.scss';
import Timer from "../../components/Timer/Timer";

export default function Statistics(props) {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  let lastTime = localStorage.getItem('totalTime');
  let lastScore = localStorage.getItem('totalScore');

  const statistics = [];
  statistics.push(lastScore)
  statistics.push(23)
  console.log(statistics)

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
          {statistics.map(item => {
            return (
              <li>Score: <span className="page-list-item">{item}</span></li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
