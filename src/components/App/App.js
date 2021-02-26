import React, {useState} from 'react';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import hotkeys from "hotkeys-js";
import './App.scss';

import Header from "../Header/Header";
import Content from "../../pages/Content/Content";
import Footer from "../Footer/Footer";
import Statistics from "../../pages/Statistics/Statistics";
import HotKeys from "../../pages/HotKeys/HotKeys";
import Settings from "../../pages/Settings/Settings";

export const ThemeContext = React.createContext();

const App = (props) => {

  const handleFS = useFullScreenHandle();

  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  hotkeys('alt+s,alt+h,alt+a,h,g+h,r+s', function (event, handler){
    switch (handler.key) {
      case 'alt+s': props.history.push('/statistics');
        break;
      case 'alt+h': props.history.push('/hotKeys');
        break;
      case 'alt+a': props.history.push('/settings');
        break;
      case 'h': props.history.push('/');
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
          <Route path="/settings" render={() => <Settings toggleTheme={toggleTheme} />}/>
        </ThemeContext.Provider>
        <Footer handleFS={handleFS}/>
      </div>
    </FullScreen>
  )
};

export default withRouter(App);
