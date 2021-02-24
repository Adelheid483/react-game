import React, {useCallback} from 'react';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Route} from 'react-router-dom';
import './App.scss';

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";
import HotKeys from "../HotKeys/HotKeys";
// import Settings from "../Settings/Settings";

export default function App() {
  const handleFS = useFullScreenHandle();
  return (
    <FullScreen handle={handleFS}>
      <div className="wrapper">
        <Header/>
        <Route path="/" exact component={Content}/>
        <Route path="/statistics" component={Statistics}/>
        <Route path="/hotKeys" component={HotKeys}/>
        {/*<Route path="/settings" component={Settings}/>*/}
        <Footer handleFS={handleFS}/>
      </div>
    </FullScreen>
  )
}
