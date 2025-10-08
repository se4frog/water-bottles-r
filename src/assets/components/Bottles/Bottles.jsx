import React, { useEffect, useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromStore } from '../../../utilities/localstorage';
import Cart from '../Cart/Cart';


const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart);

        addToStoreCart(bottle.id);
    };

    const removeCart = (id) => {
        const cartRemains = cart.filter(bottle => bottle.id !== id);
        setCart(cartRemains);
        removeFromStore(id);
    }


    const bottles = use(bottlesPromise);

    //useEffect
    useEffect(() => {
        const storedCartIDs = getStoreCart();

        const storedCART = [];

        for (const id of storedCartIDs) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            cartBottle && storedCART.push(cartBottle);


        }
        setCart(storedCART);

    }, [bottles])


    return (
        <div>
            <h3>Bottles:{bottles.length}</h3>
            <p>Added to cart:{cart.length}</p>
            <Cart removeCart={removeCart} cart={cart}></Cart>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        addToCart={addToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;