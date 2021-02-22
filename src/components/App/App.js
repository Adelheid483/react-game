import React from 'react';
import './App.scss';

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Content />
      <Footer/>
    </div>
  )
}
