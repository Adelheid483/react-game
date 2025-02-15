import React, {useState} from 'react';
import './Footer.scss';
import Modal from "../Modal/Modal";

export default function Footer({handleFS}) {

  const [modalActive, setModalActive] = useState();

  return (
    <footer className="footer">
      <div className="container">
        <a href="https://rs.school/" target="_blank" title="RS school site (R+S)">
          <img src="/img/rs-school-logo.svg" alt="rs-logo"/>
        </a>
        <div>
          <button onClick={() => setModalActive(true)}>Rules</button>
          <button onClick={handleFS.active ? handleFS.exit : handleFS.enter} title='Fullscreen (F11)'><i className="fas fa-expand-arrows-alt"/></button>
        </div>
        <ul>
          <li>
            <a href="https://github.com/Adelheid483" target="_blank" title="My GitHub (G+H)"> Adelheid483
              <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.5 0C2.90875 0 0 2.90875 0 6.5C0 9.37625 1.86062 11.8056 4.44438 12.6669C4.76937 12.7237 4.89125 12.5287 4.89125 12.3581C4.89125 12.2037 4.88313 11.6919 4.88313 11.1475C3.25 11.4481 2.8275 10.7494 2.6975 10.3837C2.62437 10.1969 2.3075 9.62 2.03125 9.46562C1.80375 9.34375 1.47875 9.04312 2.02312 9.035C2.535 9.02687 2.90062 9.50625 3.0225 9.70125C3.6075 10.6844 4.54188 10.4081 4.91563 10.2375C4.9725 9.815 5.14313 9.53062 5.33 9.36812C3.88375 9.20562 2.3725 8.645 2.3725 6.15875C2.3725 5.45187 2.62438 4.86687 3.03875 4.41187C2.97375 4.24937 2.74625 3.58312 3.10375 2.68937C3.10375 2.68937 3.64812 2.51875 4.89125 3.35562C5.41125 3.20937 5.96375 3.13625 6.51625 3.13625C7.06875 3.13625 7.62125 3.20937 8.14125 3.35562C9.38438 2.51062 9.92875 2.68937 9.92875 2.68937C10.2863 3.58312 10.0588 4.24937 9.99375 4.41187C10.4081 4.86687 10.66 5.44375 10.66 6.15875C10.66 8.65312 9.14062 9.20562 7.69438 9.36812C7.93 9.57125 8.13313 9.96125 8.13313 10.5706C8.13313 11.44 8.125 12.1387 8.125 12.3581C8.125 12.5287 8.24687 12.7319 8.57188 12.6669C9.86224 12.2313 10.9835 11.402 11.7779 10.2957C12.5722 9.18943 12.9997 7.86191 13 6.5C13 2.90875 10.0913 0 6.5 0Z"
                      fill="white"/>
              </svg>
            </a>
          </li>
          <li>2021</li>
        </ul>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="game-rules">
            <h1>Memory Game</h1>
            <strong>Description:</strong>
            <p>
              The memory game is a basic matching game to test the player's memory.
              In a deck of paired cards, the player needs to match each pair to win the game.
            </p>
            <strong>Rules:</strong>
            <p>
              The game consists of three levels, the transition is automatic.
              You should turn flipping pairs of cards over.
              On each move, you will first turn one card over, then a second.
              If the two cards match, your scores 10 points. If cards do not match, you are lost 2 points and the cards are turned back over.
              Good luck!
            </p>
            <strong>How to use:</strong>
            <p>
              Choose set of the pics and press New Game. Cute pics is default set. Press End Game to finish session and send your score to Statistics.
              You can change color theme on Settings page.
            </p>
          </div>
        </Modal>
      </div>
    </footer>
  )
}
