import React from 'react';
import './Bottle.css'
const Bottle = ({ bottle, addToCart }) => {

    const { img, name , price, stock} = bottle;


    return (
        <div>
            <div className='card'>
                <img className='bottle' src={img} alt="" />
                <h4>{name}</h4>
                <p>Price:  🤑{price}</p>
                <h3>Rmaining..{stock}</h3>
                <button onClick={()=>addToCart(bottle)}>Bye Now</button>
            </div>
        </div>
    );
};

export default Bottle;