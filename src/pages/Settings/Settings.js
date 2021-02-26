import React, {useContext} from 'react';
import {Howl} from "howler";
import {audioArray} from "../../assets/datas/audioArray";
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Settings.scss';

export default function Settings(props) {

  const music = new Howl({
    src: audioArray[0].src,
    volume: 0.5,
    loop: true,
  });

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  return (
    <section className="settings" style={themeStyles}>
      <div className="container">
        <h1>Settings</h1>
        <hr/>
        <button onClick={props.toggleTheme} className="theme-btn">Change theme</button>
        <div className="audio-settings">
          <div>Music</div>
          <button onClick={() => {music.play()}}><i className="fas fa-volume-up"></i></button>
          <button onClick={() => {music.stop()}}><i className="fas fa-volume-mute"></i></button>
        </div>
        <div className="audio-settings">
          <div>Sound</div>
          <button onClick={() => {}}><i className="fas fa-volume-up"></i></button>
          <button onClick={() => {}}><i className="fas fa-volume-mute"></i></button>
        </div>
      </div>
    </section>
  )
}
