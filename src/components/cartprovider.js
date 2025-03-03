import React, { useState } from "react";
import {CartContext} from "../contexts/contexts"
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };