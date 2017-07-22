// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/Header/index';

export default class PersonalInfo extends Component {
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
                <div>1. Введите имя и e-mail</div>
            </section>
        );
    }
}
