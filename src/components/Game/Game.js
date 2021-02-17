import React, {useState} from 'react';
import './Game.scss';
import Card from "../Card/Card";
// import {cardsArray} from './cardsArray.js';
import backImg from '../../assets/img/question.png';
import frontImg from '../../assets/img/apple.png';


export default function Game() {

    const [flipped, setFlipped] = useState([]);

    const handleClick = (id) => {
        setFlipped([...flipped, id]);
    };

    return (
        <div className="memory-game">
            <Card
                id={1}
                width={80}
                height={80}
                back={backImg}
                front={frontImg}
                flipped={flipped.includes(1)}
                handleClick={() => handleClick(1)}
            />
        </div>
    )

}
