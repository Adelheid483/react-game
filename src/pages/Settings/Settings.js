import React, {useState, useEffect, useContext} from 'react';
import {Howl} from "howler";
import {audioArray} from "../../assets/datas/audioArray";
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Settings.scss';
import Music from "../../assets/audio/tick-tack.mp3";

export default function Settings({toggleTheme}) {

  const [music, setMusic] = useState();

  useEffect(() => {setMusic(downloadAudio())}, []);
  useEffect(() => {preloadMusic()}, []);

  function downloadAudio() {
    return new Howl({
      src: setSound(Music),
      volume: 0.5,
      loop: true,
    });
  }

  function preloadMusic() {return setSound(Music)}

  function setSound(sound) {
    const audio = audioArray.find((item) => item.src === sound);
    return audio.src;
  }

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
          <button onClick={() => {music.play()}}><i className="fas fa-volume-up"/></button>
          <button onClick={() => {music.stop()}}><i className="fas fa-volume-mute"/></button>
        </div>
      </div>
    </section>
  )
}
