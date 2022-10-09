import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useGlobalContext } from '../context';
import exampleProducts from '../exampleproducts';
import CartItem from './CartItem';
import { useCartContext } from '../contexts/cart_context';
import { Link } from 'react-router-dom';
import { formatPrice } from '../helpers/format_price';


const ShoppingCart = () => {
    const {cart, clearCart, total_amount, shipping_fee} = useCartContext();
    

    if (cart.length === 0) {
        return (
            <section className='cart-container'>
                <header>
                    <h2>your bag</h2>
                    <h4>is empty</h4>
                </header>
                <Link to='/shop-all'>fill it
                </Link>

            </section>
        )
    } 
    return (
        <main>
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
                        <CartItem/>
                    </div>
                </div>



                <div className="cart-link-container">
                    <a href="#" className='cart-link-btn'>continue shopping</a>
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
                        <span>${total_amount + 5.34}</span>
                        </h4>
                    </article>
                </section>

            </section>
        </main>
    )
}

export default ShoppingCart