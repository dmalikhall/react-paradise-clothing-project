const cart_reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        const { id, sizes, amount, product } = action.payload;
        const tempItem = state.cart.find((i) => i.id === id + sizes)
        if (tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id + sizes) {
                    let newAmount = cartItem.amount + amount;
                    return { ...cartItem, amount: newAmount }
                }

                else {
                    return cartItem
                }

            })
            return { ...state, cart: tempCart }

        }
        else {
            const newItem = {
                id: id + sizes,
                name: product.name,
                sizes,
                amount,
                image: product.image

            }
            return { ...state, cart: [...state.cart, newItem] }
        }

    }
    return state

}

export default cart_reducer