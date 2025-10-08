const getCartFromLocalStorage = () => {
    const storedCartSting = localStorage.getItem('cart');
    if (storedCartSting) {
        const storedCart = JSON.parse(storedCartSting);
        return storedCart;
    } return [];
}

const saveCart = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(id);
    saveCart(cart);
}

const removeFromStore=(id)=>{
    const stores = getCartFromLocalStorage().filter(storeId => storeId !== id);
    saveCart(stores);
}


export { getCartFromLocalStorage as getStoreCart, addItemToCartLocalStorage as addToStoreCart, removeFromStore}