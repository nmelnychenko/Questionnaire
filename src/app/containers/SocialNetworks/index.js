// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/Header/index';

export default class SocialNetworks extends Component {
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
                <div>Social Networks</div>
            </section>
        );
    }
}
