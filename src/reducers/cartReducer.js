if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
}
if (action.type === 'REMOVE') {
    return { ...state, cart: state.cart.filter((theCartItem) => theCartItem.id !== action.payload) }
}

if (action.type === 'INCREASE_ITEM') {
    let tempCart = state.cart.map((theCartItem) => {
        if (theCartItem.id === action.payload) {
            return { ...theCartItem, amount: theCartItem.amount + 1 }

        }
        return theCartItem
    });
    return { ...state, cart: tempCart }
}

if (action.type === 'DECREASE_ITEM') {
    let tempCart = state.cart.map((theCartItem) => {
        if (theCartItem.id === action.payload) {
            return { ...theCartItem, amount: theCartItem.amount - 1 }

        }
        return theCartItem
    }).filter((theCartItem) => theCartItem.amount !== 0)
    return { ...state, cart: tempCart }
}

if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce((cartTotal, theCartItem) => {
        const { price, amount } = theCartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount

        return cartTotal
    }, {
        total: 0,
        amount: 0,
    })

    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
}

if (action.type === 'GET_AMOUNT') {
    const { id } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
        return tempItem.amount
    }
    else {
        return 0
    }

}

// if(action.type === 'ADD_TO_CART') {
//     const {id, name, image, sizes, price, amount, product} = action.payload;
//     const tempItem = state.cart.find((i) => i.id === id)
//     if(tempItem) {

//     }
//     else {
//         const newItem = {
//             id,
//             name,
//             image,
//             price,
//             amount,
//             sizes,
//         }
//         return {...state, cart:[...state.cart, newItem]}
//     }

// }


return state