import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Home = () => {
    const { dest } = useRouteMatch()
    
    return (
        <div className = 'homeContainer'>
            <h1>Lambda Eats</h1>
            <Link to = {`${dest}pizza`}>
                <button id = 'redirect'>Order Pizza</button>
            </Link>
        </div>
    )
}

export default Home;