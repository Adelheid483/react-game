import React from 'react';
import './Footer.scss';

import logo from '../../assets/img/rs-school-logo.svg'

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/Adelheid483" target="_blank">Adelheid483</a>
            <p>2021</p>
            <a href="https://rs.school/" target="_blank">
                <img src={logo} alt="rs-logo"/>
            </a>
        </footer>
    )
}
