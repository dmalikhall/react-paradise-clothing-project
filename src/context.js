import React, { useContext, useEffect, useReducer, useState } from 'react';
import sublinks from './sublinks';
import reducer from './reducer';
import products from './data';
// import exampleProducts from './exampleproducts';


const AppContext = React.createContext();

const initialState = {
    loading: false,
    cart: products,
    total: 0,
    amount: 0,
    shipping: 534

}

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

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

    const addToCart = (id) => {
        dispatch({ type: 'ADD_TO_CART', payload: id })
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])





    return (
        <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location, page, ...state, clearCart, remove, increaseItem, decreaseItem, addToCart }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

