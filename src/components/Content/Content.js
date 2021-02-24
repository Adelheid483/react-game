import React, {useState, useEffect, useRef} from 'react';
import {cardsArray} from "../Card/cardsArray";
import './Content.scss';

import Game from "../Game/Game";
import Toolbar from '../Toolbar/Toolbar'
import Modal from "../Modal/Modal";
import Timer from "../Timer/Timer";

export default function Content() {

  const [size, setSize] = useState(1);  // ----------------- должно быть  start 4
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(0);
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [modalActive, setModalActive] = useState();
  const refSize = useRef(size);
  const refWin = useRef(win);

  useEffect(() => {checkWins()}, [win]);

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
    refWin.current = 0;
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

  function doubleClicked(id) {selected.includes(id)}

  function isMatch(id) {
    const firstCard = cards.find((card) => card.id === id);
    const secondCard = cards.find((card) => selected[0] === card.id);
    if (secondCard.name === firstCard.name) {
      setScore((score) => score + 10);
      refWin.current++;
      checkWins();
    } else {
      if (score > 0) {
        setScore(prev => prev - 2);
      }
    }
    return secondCard.name === firstCard.name;
  }

  function checkWins() {
    if (refWin.current === refSize.current) {
      if (refWin.current === 3) { // ----------------- должно быть cardsArray.length
        endGame();
      } else {
        setSize((size) => size + 1); // ----------------- должно быть  count +4
        refSize.current += 1;             // ----------------- должно быть  count +4
        setLevel((level) => level + 1);
        setTimeout(() => {
          startGame(refSize.current);
        }, 1500)
      }
    }
  }

  function resetGuesses() {
    setSelected([]);
    setDisabled(false);
  }

  function zeroingScore() {
    setScore(() => {return 0});
    setLevel(() => {return 1});
  }

  function startGame(size) {
    setMatched([]);
    setCards(createCards(size));
  }

  function endGame() {
    stopTimer();
    // setSize(() => {return 1}); //!!!!!!!!!!!!!!!!!-----------------------------
    setModalActive(true);
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
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          setSize={setSize} //!!!!!!!!!!!!!!!!!-----------------------------
          score={score}
          win={refWin.current}
          level={level}
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="game-rules">
          <h1>Congrats!</h1>
          <strong>Total score: {score}</strong>
          <strong>Total time: <Timer time={time}/> </strong>
          <button onClick={() => {
            startGame(setSize(() => {return 1})); // !!!!!!!!!!!!!!!!!!----------------------
            zeroingScore();
            stopTimer();
            resetTimer();
            startTimer();
            setModalActive(false);
          }}>
            New Game
          </button>
        </div>
      </Modal>
    </section>
  )
}
