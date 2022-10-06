import React, { useContext, useEffect, useReducer, useState } from 'react';
import sublinks from './sublinks';
import reducer from './reducer';
import { products_url as url } from './api/clothing-api';

import axios from 'axios'
// import products from './data';
// import exampleProducts from './exampleproducts';


const AppContext = React.createContext();

const initialState = {
    allProducts: [],
    allTopsItems: [],
    allAccessoryItems:[],

}

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async (url) => {
        try {
            const response = await axios.get(url)
            const products = response.data
            dispatch({type: 'GET_PRODUCT_SUCCESS', payload: products})

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchProducts(url)

    }, [])

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

    // const getProducts = (allProducts) => {
    //     dispatch({type: 'GET_PRODUCT_SUCCESS', payload: allProducts})
    // }

    








    return (
        <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location, page, ...state, }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

