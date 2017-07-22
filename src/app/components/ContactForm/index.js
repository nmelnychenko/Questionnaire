// Core
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required';
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const ContactForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text"
                   component={renderField} placeholder="Username"
                   validate={[ required ]}
            />
            <Field name="email" type="email"
                   component={renderField} placeholder="Email"
                   validate={email}
            />
            {/*<div>*/}
                {/*<button type="submit" disabled={submitting}>Submit</button>*/}
                {/*<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>*/}
            {/*</div>*/}
        </form>
    )
};

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(ContactForm);