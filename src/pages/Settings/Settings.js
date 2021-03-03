import React, {useContext} from 'react';
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Settings.scss';

export default function Settings({toggleTheme, toggleSound, musicActive}) {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  return (
    <section className="settings" style={themeStyles}>
      <div className="container">
        <h1>Settings</h1>
        <hr/>
        <button onClick={toggleTheme} className="theme-btn">Change theme</button>
        <div className="audio-settings">
          <div>Music</div>
          <button onClick={toggleSound}>
            <i className={`fas fa-volume-up ${musicActive ? 'sound_active' : 'sound'}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
