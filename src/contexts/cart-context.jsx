import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // if(!cartItems || !productToAdd) return;
    
    // const newCartItems = [...cartItems];
    // const index = newCartItems.findIndex(el => el.id === productToAdd.id);
    // if (index) {
    //     const initQnty = newCartItems[index].quantity;
    //     initQnty += 1;
    //     newCartItems[index].
    // }
   
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({ children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(cartItems, productToAdd);
    }

    const value = { isCartOpen, setIsCartOpen };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}