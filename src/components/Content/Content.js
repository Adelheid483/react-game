import React from 'react';
import './Content.scss';

import Game from "../Game/Game";
import Toolbar from '../Toolbar/Toolbar'

export default function Content(props) {

  return (
    <section className="content">
      <div className="container">
        <Game
          cards={props.cards}
          handleClick={props.handleClick}
          selected={props.selected}
          matched={props.matched}
          disabled={props.disabled}
        />
        <Toolbar />
      </div>
    </section>
  )
}
