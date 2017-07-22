// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/Header';
import PreviousStep from '../../components/PreviousStep';
import FinalStep from '../../components/FinalStep';

export default class PictureChecking extends Component {
    static propTypes = {
        prop1: PropTypes.string
    };

    constructor () {
        super();

        this.method1 = ::this._method1;
    }

    _method1 () {

    }

    render () {
        return (
            <section className = 'personalInfo'>
                <Header />
                <div>4. Выберите любимого котика</div>
                <ul>
                    <li>
                        <img src="../../../static/cat1.jpg" alt="cat1" />
                    </li>
                    <li>
                        <img src="../../../static/cat2.jpg" alt="cat2" />
                    </li>
                    <li>
                        <img src="../../../static/cat3.jpg" alt="cat3" />
                    </li>
                    <li>
                        <img src="../../../static/dog4.jpg" alt="dog4" />
                    </li>
                </ul>
                <PreviousStep prev="/networks" />
                <FinalStep />
            </section>
        );
    }
}
