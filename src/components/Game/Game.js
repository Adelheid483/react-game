import React, {useEffect, useState} from 'react';
import './Game.scss';

import Card from "../Card/Card";
import {cardsArray} from "../Card/cardsArray";

export default function Game() {

  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => setCards(createCards(4)), []);

  function createCards(size) {
    const sizedArray = cardsArray
      .sort(() => 0.5 - Math.random())
      .slice(0, size);
    const gameArray = sizedArray
      .concat(sizedArray)
      .sort(() => 0.5 - Math.random());
    return gameArray.map((card, index) => {
      return {
        name: card.name,
        id: index
      }
    });
  }

  const handleClick = (id) => {
    setDisabled(true);
    if (selected.length === 0) {
      setSelected([id]);
      setDisabled(false);
    } else {
      if (selected.includes(id)) return;
      setSelected([selected[0], id]);
      if (isMatch(id)) {
        setMatched([...matched, selected[0], id]);
        resetGuesses();
      } else {
        setTimeout(resetGuesses, 1000);
      }
    }
  };

  const isMatch = (id) => {
    const firstCard = cards.find((card) => card.id === id);
    const secondCard = cards.find((card) => selected[0] === card.id);
    return secondCard.name === firstCard.name;
  };

  const resetGuesses = () => {
    setSelected([]);
    setDisabled(false);
  };

  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card
          name={card.name}
          id={card.id}
          key={card.id}
          handleClick={handleClick}
          selected={selected.includes(card.id)}
          matched={matched.includes(card.id)}
          disabled={disabled || matched.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  )
}
