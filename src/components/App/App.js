import React, {useEffect, useState} from 'react';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import hotkeys from "hotkeys-js";
import Music from "../../assets/audio/tick-tack.mp3";
import {audioArray} from "../../assets/datas/audioArray";
import './App.scss';

import Header from "../Header/Header";
import Content from "../../pages/Content/Content";
import Footer from "../Footer/Footer";
import Statistics from "../../pages/Statistics/Statistics";
import HotKeys from "../../pages/HotKeys/HotKeys";
import Settings from "../../pages/Settings/Settings";

export const ThemeContext = React.createContext();

const App = ({history}) => {

  const handleFS = useFullScreenHandle();
  const [darkTheme, setDarkTheme] = useState(true);
  const [music] = useState(new Audio(setSound(Music)));
  const [musicActive, setMusicActive] = useState(false);
  music.loop = true;

  useEffect(() => {preloadMusic()}, []);

  useEffect(() => {musicActive ? music.play() : music.pause()},[musicActive]);

  function toggleTheme() {setDarkTheme((prevTheme) => !prevTheme)}

  function toggleSound() {setMusicActive(!musicActive)}

  function preloadMusic() {return setSound(Music)}

  function setSound(sound) {
    const audio = audioArray.find((item) => item.src === sound);
    return audio.src;
  }

  hotkeys('alt+s,alt+h,alt+a,h,g+h,r+s', function (event, handler){
    switch (handler.key) {
      case 'alt+s': history.push('/statistics');
        break;
      case 'alt+h': history.push('/hotKeys');
        break;
      case 'alt+a': history.push('/settings');
        break;
      case 'h': history.push('/');
        break;
      case 'g+h': window.open('https://github.com/Adelheid483', '_blank');
        break;
      case 'r+s': window.open('https://rs.school/', '_blank');
        break;
      default: break;
    }
  });

  return (
    <FullScreen handle={handleFS}>
      <div className="wrapper">
        <Header />
        <ThemeContext.Provider value={darkTheme}>
          <Route path="/" exact component={Content}/>
          <Route path="/statistics" component={Statistics}/>
          <Route path="/hotKeys" component={HotKeys}/>
          <Route path="/settings" render={() => <Settings toggleTheme={toggleTheme} toggleSound={toggleSound} musicActive={musicActive}/>}/>
        </ThemeContext.Provider>
        <Footer handleFS={handleFS} />
      </div>
    </FullScreen>
  )
};

export default withRouter(App);
