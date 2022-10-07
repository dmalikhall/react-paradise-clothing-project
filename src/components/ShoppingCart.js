import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useGlobalContext } from '../context';
import exampleProducts from '../exampleproducts';
import CartItem from './CartItem';


const ShoppingCart = () => {
    // const { cart, total, clearCart } = useGlobalContext();
    // if (cart.length === 0) {
    //     return (
    //         <section className='cart-container'>
    //             <header>
    //                 <h2>your bag</h2>
    //                 <h4>is empty</h4>
    //             </header>

    //         </section>
    //     )
    // }
    return (
        <main>
            <h1>shopping cart</h1>
            {/* <section className="cart-container">
                <div className="headlines">
                    <div className="content">
                        <h5>item</h5>
                        <h5>quantity</h5>
                        <h5>price</h5>
                        <h5>subtotal</h5>
                        <span></span>
                    </div>
                </div>

                <div>
                    <div>
                        {cart.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })}
                    </div>
                </div> */}



                {/* <article className='cart-item'>
                    <div className="title">
                        <img src='https://source.unsplash.com/h2dY1o-3rp0' alt="image" />
                        <div>
                            <h5 className='name'>forever fashion t-shirt</h5>
                            <p className='size'>size: S</p>
                            <h5 className='price-small'>$49.99</h5>
                        </div>
                        
                    </div>
                    <h5 className='price'>$49.99</h5>
                    <div className="amount-btns">
                        <button type='button' className='amount-btn'><AiOutlineMinus/></button>
                        <h2 className='amount'>1</h2>
                        <button type='button' className='amount-btn'><AiOutlinePlus/></button>
                    </div>

                    <h5 className='subtotal'>$49.99</h5>
                    <button className='remove-btn'><BsTrashFill/></button>

                </article> */}

                {/* <div className="cart-link-container">
                    <a href="#" className='cart-link-btn'>continue shopping</a>
                    <button type='button' className='cart-link-btn clear-btn' onClick={clearCart}>clear shopping cart</button>
                </div>

                <section className='margin-top'>
                    <article className='mobile-cart'>
                        <h5>subtotal:
                            <span>${total}</span>
                        </h5>
                        <p>shipping fee
                            <span>$5.34</span>
                        </p>

                        <h4>order total:
                            <span>$54.00</span>
                        </h4>
                    </article>
                </section>

            </section> */}
        </main>
    )
}

export default ShoppingCart