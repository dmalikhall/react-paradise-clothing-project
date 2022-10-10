import React from 'react';
import { useGlobalContext } from '../context';
import CartItem from './CartItem';
import { useCartContext } from '../contexts/cart_context';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const { closeSubmenu } = useGlobalContext()
    const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
    let orderTotal = total_amount + shipping_fee;
    orderTotal = parseFloat(orderTotal).toFixed(2)

    if (cart.length === 0) {
        return (
            <section className='cart-container empty-container'>
                <header>
                    <h2>your bag is empty</h2>
                </header>
                <Link to='/shop-all' className='fill-it_button'>
                    <button>fill it</button>
                </Link>

            </section>
        )
    }
    return (
        <main onMouseOver={closeSubmenu}>
            <h1>shopping cart</h1>
            <section className="cart-container">
                <div className="headlines">
                    <div className="content">
                        <h5>item</h5>
                        <h5>price</h5>
                        <h5>quantity</h5>
                        <h5>subtotal</h5>
                        <span></span>
                    </div>
                </div>

                <div>
                    <div>
                        <CartItem />
                    </div>
                </div>

                <div className="cart-link-container">
                    <Link to={'/shop-all'} className='cart-link-btn'>continue shopping</Link>
                    <button type='button' className='cart-link-btn clear-btn' onClick={clearCart} >clear shopping cart</button>
                </div>

                <section className='margin-top'>
                    <article className='mobile-cart'>
                        <h5>subtotal:
                            <span>${total_amount}</span>
                        </h5>
                        <p>shipping fee
                            <span>${shipping_fee}</span>
                        </p>

                        <h4>order total:
                            <span>${orderTotal}</span>
                        </h4>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default ShoppingCart