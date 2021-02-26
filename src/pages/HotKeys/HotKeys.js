import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './HotKeys.scss';

export default function HotKeys() {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  return (
    <section className="hot-keys" style={themeStyles}>
      <div className="container">
        <h1>Hot Keys</h1>
        <hr/>
        <ul className="page-list">
          <li>Home page: <span className="page-list-item">H</span></li>
          <li>Statistics page: <span className="page-list-item">Alt+S</span></li>
          <li>Hot Keys page: <span className="page-list-item">Alt+H</span></li>
          <li>Settings page: <span className="page-list-item">Alt+A</span></li>
          <li>My GitHub: <span className="page-list-item">G+H</span></li>
          <li>RS school: <span className="page-list-item">R+S</span></li>
          <li>Fullscreen: <span className="page-list-item">F11</span></li>
        </ul>
      </div>
    </section>
  )
}
