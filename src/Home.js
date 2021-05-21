import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    const routeToOrder = () => {
        history.push('/order-pizza')
    }

    return (
        <div className = 'home-wrapper'>
            <h1>Lambda Eats</h1>
            <button id = 'redirect' onClick = {routeToOrder}>Place an Order</button>
        </div>
    )
}