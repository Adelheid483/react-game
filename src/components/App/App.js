import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";
import HotKeys from "../HotKeys/HotKeys";

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Route path="/" exact component={Content} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/hotKeys" component={HotKeys} />
      <Footer/>
    </div>
  )
}
