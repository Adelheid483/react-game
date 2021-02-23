import React, {useState, useEffect} from 'react';
import {cardsArray} from "../Card/cardsArray";
import './Content.scss';

import Game from "../Game/Game";
import Toolbar from '../Toolbar/Toolbar'

export default function Content() {

  const [size, setSize] = useState(2);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(0);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {checkWins()}, [win]);

  // useEffect(() => {changeSize()}, []);

  useEffect(() => {preloadImg()}, [cards]);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!timeOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeOn]);

  function createCards(size) {
    setWin(() => {return 0});
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

  function preloadImg() {
    cards.map((card) => {
      return new Image().src = `/img/${card.name}.png`
    });
  }

  function handleClick(id) {
    setDisabled(true);
    if (selected.length === 0) {
      setSelected([id]);
      setDisabled(false);
    } else {
      if (doubleClicked(id)) return;
      setSelected([selected[0], id]);
      if (isMatch(id)) {
        setMatched([...matched, selected[0], id]);
        resetGuesses();
      } else {
        setTimeout(resetGuesses, 1000);
      }
    }
  }

  function doubleClicked(id) {
    selected.includes(id)
  }

  function isMatch(id) {
    const firstCard = cards.find((card) => card.id === id);
    const secondCard = cards.find((card) => selected[0] === card.id);
    if (secondCard.name === firstCard.name) {
      setScore((score) => score + 10);
      setWin((win) => win + 1);
      checkWins();
    } else {
      if (score > 0) {
        setScore(prev => prev - 2);
      }
    }
    return secondCard.name === firstCard.name;
  }

  const checkWins = () => {

    if (win === cardsArray.length) {
      alert('finish game');
      stopTimer();
    }

    if (win === size) {
      setSize((size) => size + 2);
      setTimeout(() => {
        startGame(size);
        stopTimer();
        resetTimer();
        startTimer();
      }, 1500)
    }

  };

  function resetGuesses() {
    setSelected([]);
    setDisabled(false);
  }

  function zeroingScore() {setScore(() => {return 0})}

  function startGame(size) {
    setMatched([]);
    setCards(createCards(size));
  }

  function startTimer() {setTimeOn(true)}

  function stopTimer() {setTimeOn(false)}

  function resetTimer() {setTime(() => {return 0})}

  return (
    <section className="content">
      <div className="container">
        <Toolbar
          startGame={startGame}
          zeroingScore={zeroingScore}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          startTimer={startTimer}
          score={score}
          win={win}
          size={size}
          time={time}
        />
        <Game
          cards={cards}
          handleClick={handleClick}
          selected={selected}
          matched={matched}
          disabled={disabled}
        />
      </div>
    </section>
  )
}
