import React from 'react';
import './Game.scss';

import Card from "../Card/Card";

export default function Game(props) {
  return (
    <div className="memory-game">
      {props.cards.map((card) => (
        <Card
          name={card.name}
          id={card.id}
          key={card.id}
          handleClick={props.handleClick}
          selected={props.selected.includes(card.id)}
          matched={props.matched.includes(card.id)}
          disabled={props.disabled || props.matched.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  )
}
