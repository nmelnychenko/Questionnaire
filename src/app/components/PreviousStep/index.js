import React from 'react';
import { Link } from 'react-router';

const PreviousStep = (props) => (
    <div className="button previous">
        <Link to={props.prev}>Предыдущий</Link>
    </div>
);

export default PreviousStep;