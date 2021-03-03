import React, {useState, useEffect, useRef, useContext} from 'react';
import {cardsArray_1} from "../../assets/datas/cardsArray_1";
import {audioArray} from "../../assets/datas/audioArray";
import {ThemeContext} from "../../components/App/App";
import {getTheme} from "../../assets/datas/themes";
import './Content.scss';

import Game from "../../components/Game/Game";
import Toolbar from '../../components/Toolbar/Toolbar'
import Modal from "../../components/Modal/Modal";
import Timer from "../../components/Timer/Timer";

export default function Content() {

  const [size, setSize] = useState(4);  // init size
  const [cards, setCards] = useState([]);
  const [pics, setPics] = useState(cardsArray_1);
  const [radioBtn, setRadioBtn] = useState('set 1');
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(0);
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [modalActive, setModalActive] = useState();
  const [gameActive, setGameActive] = useState(false);
  const [sizeStep] = useState(4);
  const refSize = useRef(size);

  useEffect(() => {
    const data = localStorage.getItem('gameStorage');
    if (data) {
      let gameStorage = JSON.parse(data);
      setSize(() => {return gameStorage.size});
      setCards(() => {return gameStorage.cards});
      setPics(() => {return gameStorage.pics});
      setRadioBtn(() => {return gameStorage.radioBtn});
      setSelected(() => {return gameStorage.selected});
      setMatched(() => {return gameStorage.matched});
      setDisabled(() => {return gameStorage.disabled});
      setScore(() => {return gameStorage.score});
      setWin(() => {return gameStorage.win});
      setLevel(() => {return gameStorage.level});
      setTime(() => {return gameStorage.time});
      setTimeOn(() => {return gameStorage.timeOn});
      setModalActive(() => {return gameStorage.modalActive});
      setGameActive(() => {return gameStorage.gameActive});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameStorage',
      JSON.stringify({
        size, cards, pics, radioBtn, selected, matched, disabled, score, win,
        level, time, timeOn, modalActive, gameActive,
      }));
  });

  useEffect(() => {checkWins()}, [win]);
  useEffect(() => {preloadImg()}, [cards]);
  useEffect(() => {preloadSounds()}, []);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {setTime((prev) => prev + 1000)}, 1000);
    } else if (!timeOn) {clearInterval(interval)}
    return () => clearInterval(interval);
  }, [timeOn]);

  function createCards(size) {
    const sizedArray = pics
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

  function preloadSounds() {
    audioArray.map((item) => {
      return item;
    });
  }

  function handleClick(id) {
    setDisabled(true);
    if (selected.length === 0) {
      setSelected([id]);
      setDisabled(false);
    } else {
      if(selected[0] === id) {
        setDisabled(false);
        return;
      }
      setSelected([selected[0], id]);
      if (isMatch(id)) {
        setMatched([...matched, selected[0], id]);
        resetGuesses();
      } else {
        setTimeout(resetGuesses, 800);
      }
    }
  }

  function resetGuesses() {
    setSelected([]);
    setDisabled(false);
  }

  function isMatch(id) {
    const firstCard = cards.find((card) => card.id === id);
    const secondCard = cards.find((card) => selected[0] === card.id);
    if (secondCard.name === firstCard.name) {
      correctAnswer();
      checkWins();
    } else {
      if (score > 0) {
        setScore(prev => prev - 2);
      }
    }
    return secondCard.name === firstCard.name;
  }

  function correctAnswer() {
    setScore((score) => score + 10);
    setWin((win) => win + 1);
    playSound('Correct');
  }

  function checkWins() {
    if (win === refSize.current) {
      if (win === pics.length) {
        setTimeout(() => {endGame()}, 800);
      } else {
        setTimeout(() => {levelUp()}, 800);
        setTimeout(() => {startGame(refSize.current)}, 800)
      }
    }
  }

  function levelUp() {
    setWin(() => {return 0});
    setLevel((level) => level + 1);
    setSize((size) => size + sizeStep);
    refSize.current += sizeStep;
    playSound('LevelUp');
  }

  function saveInStorage(newScore, newTime) {
    if (localStorage.getItem('previousResults') === null) {
      localStorage.setItem('previousResults', '[]')
    }
    let previousResults = JSON.parse(localStorage.getItem('previousResults'));
    previousResults.push({
      s: newScore,
      t: newTime,
    });
    localStorage.setItem('previousResults', JSON.stringify(previousResults));
  }

  function startGame(size) {
    setMatched([]);
    setCards(createCards(size));
  }

  function endGame() {
    if (!gameActive) return;
    setGameActive(false);
    setCards([]);
    setWin(() => {return 0});
    resetGuesses();
    stopTimer();
    toggleModal(true);
    playSound('GameEnd');
    localStorage.setItem('lastScore', score);
    localStorage.setItem('lastTime', time);
    saveInStorage(score, time);
  }

  function newGame() {
    setGameActive(true);
    setScore(() => {return 0});
    setWin(() => {return 0});
    setLevel(() => {return 1});
    refSize.current = 4;
    startGame(refSize.current);
    stopTimer();
    resetTimer();
    startTimer();
  }

  function playSound(sound) {
    const audio = audioArray.find((item) => item.label === `${sound}`);
    const audioGameEnd = new Audio(audio.src);
    audioGameEnd.play();
  }

  function startTimer() {setTimeOn(true)}
  function stopTimer() {setTimeOn(false)}
  function resetTimer() {setTime(() => {return 0})}
  function toggleModal(bool) {setModalActive(bool)}

  const darkTheme = useContext(ThemeContext);
  const themeStyles = getTheme(darkTheme);

  function choosePics(pics) {
    setPics(() => pics)
  }

  return (
    <section className="content" style={themeStyles}>
      <div className="container">
        <Toolbar
          newGame={newGame}
          endGame={endGame}
          level={level}
          score={score}
          win={win}
          time={time}
          radioBtn={radioBtn}
          setRadioBtn={setRadioBtn}
          choosePics={choosePics}
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
            newGame();
            toggleModal(false);
          }}>
            New Game
          </button>
        </div>
      </Modal>
    </section>
  )
}
