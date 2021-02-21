import React from 'react';
import './Card.scss';

export default function Card(props) {
    return (
        <div
            className={`card ${props.selected ? 'selected' : ''}`}
            onClick={()=> props.disabled ? null : props.handleClick(props.id)}
        >

            <div className='card-item'>
                <img
                    className={props.selected ? 'card-item-front' : 'card-item-back'}
                    src={props.selected || props.matched ? `/img/${props.name}.png` : '/img/question.png'}
                    alt={props.name}
                />
            </div>

        </div>
    )
}
