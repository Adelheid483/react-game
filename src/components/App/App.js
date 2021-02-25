import React, {useState} from 'react';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Route} from 'react-router-dom';
import './App.scss';

import Header from "../Header/Header";
import Content from "../../pages/Content/Content";
import Footer from "../Footer/Footer";
import Statistics from "../../pages/Statistics/Statistics";
import HotKeys from "../../pages/HotKeys/HotKeys";
import Settings from "../../pages/Settings/Settings";

export const ThemeContext = React.createContext();

export default function App() {

  const handleFS = useFullScreenHandle();

  const [darkTheme, setDarkTheme] = useState(true);
   function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

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
}
