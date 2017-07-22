import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">1</Link>
                </li>
                <li>
                    <Link to="/location">2</Link>
                </li>
                <li>
                    <Link to="/networks">3</Link>
                </li>
                <li>
                    <Link to="/checking">4</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
