import React from 'react';
import { Link } from 'react-router';

const NextStep = (props) => (
    <div className="button next">
        <Link to={props.next}>Следующий</Link>
    </div>
);

export default NextStep;
