import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Home = () => {
    const { url } = useRouteMatch()
    
    return (
        <div className = 'homeContainer'>
            <h2>Best pizza online!</h2>
            <Link to = {`${url}pizza`}>
                <button id = 'order-pizza'>Order Pizza</button>
            </Link>
        </div>
    )
}

export default Home;