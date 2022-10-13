const reducer = (state, action) => {
    if(action.type === 'GET_PRODUCTS_BEGIN') {
        return {...state, products_loading:true}
    }

    
    if (action.type === 'GET_PRODUCT_SUCCESS') {
        const allTops_items = action.payload.filter((category) => category.mainCategory === 'all-tops');
        const allAccessories_items = action.payload.filter((category) => category.mainCategory === 'all-accessories');
        const allBottom_items = action.payload.filter((category) => category.mainCategory === 'all-bottoms');
        const allHat_items = action.payload.filter((category) => category.subCategory === 'hats');
        const allHeadphone_items = action.payload.filter((category) => category.subCategory === 'headphones');
        const allHoody_items = action.payload.filter((category) => category.subCategory === 'hoodies');
        const allJackets_items = action.payload.filter((category) => category.subCategory === 'jackets');
        const allJoggingPants_items = action.payload.filter((category) => category.subCategory === 'jogging pants');
        const allLongSLeeve_items = action.payload.filter((category) => category.subCategory === 'long sleeves');
        const allShorts_items = action.payload.filter((category) => category.subCategory === 'shorts');
        const allShortSleeves_items = action.payload.filter((category) => category.subCategory === 'short-sleeves');
        const allSunglasess_items = action.payload.filter((category) => category.subCategory === 'sunglasses');
        const allTights_items = action.payload.filter((category) => category.subCategory === 'tights');
        return { 
            ...state, products_loading:false,
            allProducts: action.payload, 
            allTopsItems: allTops_items, 
            allAccessoryItems:  allAccessories_items,
            allBottomItems: allBottom_items,
            allHatItems: allHat_items,
            allHeadphoneItems: allHeadphone_items,
            allHoodyItems: allHoody_items,
            allJacketItems: allJackets_items,
            allJoggingPantsItems: allJoggingPants_items,
            allLongSleeveItems: allLongSLeeve_items,
            allShortsItems: allShorts_items,
            allShortSleevesItems: allShortSleeves_items,
            allSunglassesItems: allSunglasess_items,
            allTightsItems: allTights_items
        }
    }    

    if(action.type === 'GET_PRODUCTS_ERROR'){
        return {...state, products_loading:false, products_error:true}       
    }

    
}

export default reducer