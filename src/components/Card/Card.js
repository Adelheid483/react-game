import React from 'react';
import './Card.scss';
import backImg from "../../assets/img/question.png";

export default function Card({id, width, height, back, front, flipped, handleClick}) {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{width, height}}
            onClick={handleClick}>

            <div className="flipper">
                <img
                    src={flipped ? front : back}
                    style={{height, width}}
                    className={flipped ? 'front' : 'back'}
                    alt=""
                />
            </div>

        </div>
    )
}
