import React from 'react';
import './Card.scss';

export default function Card({id, name, selected, matched, disabled, handleClick}) {
    return (
        <div
            className={`card ${selected ? 'selected' : ''}`}
            onClick={()=> disabled ? null : handleClick(id)}>

            <div className='card-item'>
                <img
                    className={selected ? 'card-item-front' : 'card-item-back'}
                    src={selected || matched ? `/img/${name}.png` : '/img/question.png'}
                    alt={name} />
            </div>

        </div>
    )
}
