// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/Header';
import Select from 'react-select';
import PreviousStep from '../../components/PreviousStep';
import NextStep from '../../components/NextStep';

export default class Location extends Component {
    static propTypes = {
        prop1: PropTypes.string
    };

    state = {
        select1Value: 'Ukraine',
        select2Value: 'Kyiv'
    };

    constructor () {
        super();

        this.updateValue1 = ::this.updateValue1;
        this.updateValue2 = ::this.updateValue2;
    }

    updateValue1 (newValue) {
        console.log('State changed to ' + JSON.stringify(newValue) );
        this.setState({
            select1Value: newValue
        });
    }

    updateValue2 (newValue) {
        console.log('State changed to ' + JSON.stringify(newValue) );
        this.setState({
            select2Value: newValue
        });
    }

    render () {
        const options1 = [
            {value: "1", label: "Ukraine" },
            {value: "2", label: "Germany" },
            {value: "3", label: "France" },
            {value: "4", label: "Spain" },
            {value: "5", label: "Sweden" },
            {value: "6", label: "USA" },
            {value: "7", label: "Canada" },
            {value: "8", label: "Moldova" },
            {value: "9", label: "Belarus" },
            {value: "10", label: "Poland" }
        ];

        const options2 = [
            {value: "1", label: "Ukraine" },
            {value: "2", label: "Paris" },
            {value: "3", label: "Madrid" },
            {value: "4", label: "Houston" },
            {value: "5", label: "Montreal" },
            {value: "6", label: "Кишинев" },
            {value: "7", label: "Minsk" },
            {value: "8", label: "Warsaw" },
            {value: "9", label: "Львов" },
            {value: "10", label: "Николаев" }
        ];

        return (
            <section className = 'personalInfo'>
                <Header />
                <div>2. Выберете страну и город</div>
                <Select
                    autofocus
                    value={this.state.select1Value}
                    onChange={this.updateValue1}
                    name="form-field-name"
                    options={options1}
                />
                <Select
                    value={this.state.select2Value}
                    onChange={this.updateValue2}
                    name="form-field-name2"
                    options={options2}
                />
                <PreviousStep />
                <NextStep />
            </section>
        );
    }
}
