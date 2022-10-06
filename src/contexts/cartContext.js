import React, { useContext, useEffect, useReducer, useState } from 'react';

const CartContext = React.createContext();

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
    shipping: 534

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const increaseItem = (id) => {
        dispatch({ type: 'INCREASE_ITEM', payload: id })
    }

    const decreaseItem = (id) => {
        dispatch({ type: 'DECREASE_ITEM', payload: id })
    }

    const addToCart = (id, name, image, sizes, price, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: {id, name, image, sizes, price, amount, product }})
    }

    const getAmount = (id) => {
        dispatch({type: 'GET_AMOUNT', payload:id})
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])
    return (
        <CartContext value= {{...state, clearCart, remove, increaseItem, decreaseItem, addToCart, getAmount}}>
            {children}
        </CartContext>
    )
}

export const useCartGlobalContext = () => {
    return useContext(CartContext)
}