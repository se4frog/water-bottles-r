import React from 'react';
import './Cart.css'
const Cart = ({ cart, removeCart }) => {
    return (
        <div className='cart-container'>
            {
                cart.map((bottle , i )=> <div key={i}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=>removeCart(bottle.id)}>X</button>
                </div>

                )
            }
        </div>
    );
};

export default Cart;