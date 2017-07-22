// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components

export default class Profile extends Component {
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
                <button>Profile</button>
            </section>
        );
    }
}
