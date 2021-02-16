import React, {Component} from 'react';
import './App.scss';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default class App extends Component {
    render() {
        return (
            <section>
                <Header />
                <Footer />
            </section>
        )
    }
}
