import React, {useState, useEffect, useContext} from 'react';
import {audioArray} from "../../assets/datas/audioArray";
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Settings.scss';
import Music from "../../assets/audio/tick-tack.mp3";

export default function Settings({toggleTheme}) {

  const [music] = useState(new Audio(setSound(Music)));
  const [musicActive, setMusicActive] = useState(false);
  music.loop = true;

  useEffect(() => {preloadMusic()}, []);

  useEffect(() => {musicActive ? music.play() : music.pause()},[musicActive]);

  useEffect(() => {
    music.addEventListener('play', setMusicActive(false));
    return () => {
      music.removeEventListener('play', setMusicActive(false));
    };
  }, [music]);

  function toggleSound() {setMusicActive(!musicActive)}

  function setSound(sound) {
    const audio = audioArray.find((item) => item.src === sound);
    return audio.src;
  }

  function preloadMusic() {return setSound(Music)}

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
