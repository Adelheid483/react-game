import React from 'react';
import './Content.scss';
import Game from "../Game/Game";

export default function Content() {
    return (
        <section className="content">
            <div className="container">
                <Game />
            </div>
        </section>
    )
}
