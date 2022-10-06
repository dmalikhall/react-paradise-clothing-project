const reducer = (state, action) => {
    if (action.type === 'GET_PRODUCT_SUCCESS') {
        const allTops_items = action.payload.filter((category) => category.mainCategory === 'all-tops');
        const allAccessories_items = action.payload.filter((category) => category.mainCategory === 'all-accessories')
        return { ...state, allProducts: action.payload, allTopsItems: allTops_items, allAccessoryItems:  allAccessories_items }
    } 

    // if (action.type === 'GET_PRODUCT_SUCCESS') {
    //     const allAccessories_items = action.payload.filter((category) => category.mainCategory === 'all-accessories')
    //     return { ...state, allProducts: action.payload, allTopsItems: action.payload, allAccessoryItems:  allAccessories_items}
    // }

   
}

export default reducer