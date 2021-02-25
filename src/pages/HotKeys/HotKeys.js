import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import './HotKeys.scss';

export default function HotKeys() {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#b1d6da' : '#012B35',
  };

  return (
    <section className="hot-keys" style={themeStyles}>
      <div className="container">
        <h1>Hot Keys</h1>
        <hr/>
        <ul className="page-list">
          <li>New Game: <span className="page-list-item">A</span></li>
          <li>Statistics: <span className="page-list-item">B</span></li>
          <li>Hot Keys: <span className="page-list-item">B</span></li>
          <li>RS school: <span className="page-list-item">B</span></li>
          <li>My Github: <span className="page-list-item">B</span></li>
          <li>Fullscreen: <span className="page-list-item">F11</span></li>
        </ul>
      </div>
    </section>
  )
}
