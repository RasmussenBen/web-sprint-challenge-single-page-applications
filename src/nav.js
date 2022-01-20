import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className = 'header'>
            <div className = 'nav'>
                <h1>Lambda Eats</h1>
                <div>
                    <Link to = '/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;