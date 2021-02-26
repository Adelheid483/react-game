import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Statistics.scss';

export default function Statistics(props) {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  return (
    <section className="statistics" style={themeStyles}>
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
