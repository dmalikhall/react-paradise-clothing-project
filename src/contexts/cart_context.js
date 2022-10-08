import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add to cart
    const addToCart = (id, sizes, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, sizes, amount, product } })
    }

    // remove item
    const removeItem = (id) => {
        // toggle amount
    }
    // toggle amount
    const toggleAmount = (id, value) => {

    }

    // clear cart
    const clearCart = () => {

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))

    }, [state.cart])
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}