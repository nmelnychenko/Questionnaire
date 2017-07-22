// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import Header from '../../components/Header';
import PreviousStep from '../../components/PreviousStep';
import NextStep from '../../components/NextStep';

class SocialNetworks extends Component {
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
                <div>3. Отметьте социальные сети</div>
                <label htmlFor="fb">Facebook</label>
                <input type="checkbox" id="fb"/>
                <Field name="facebookInput" component="input" type="text"/>
                <label htmlFor="vk">Вконтакте</label>
                <input type="checkbox" id="vk" />
                <Field name="vkontakteInput" component="input" type="text"/>
                <label htmlFor="tw">Twitter</label>
                <input type="checkbox" id="tw"/>
                <Field name="twitterInput" component="input" type="text"/>
                <label htmlFor="ok">Одноклассники</label>
                <input type="checkbox" id="ok" />
                <Field name="odnoklassnikiInput" component="input" type="text"/>
                <PreviousStep prev="/location" />
                <NextStep next="/checking" />
            </section>
        );
    }
}

export default reduxForm({
    form: 'socialNetworksForm' // a unique identifier for this form
})(SocialNetworks);