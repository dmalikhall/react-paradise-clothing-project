
import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useGlobalContext } from "../context";
import exampleProducts from "../exampleproducts";
import { useCartContext } from '../contexts/cart_context';


const CartItem = () => {
    const { cart, total_amount, removeItem, toggleAmount, } = useCartContext();




    return (
        <>
            {cart.map((item) => {
                const { id, name, sizes, amount, image, price } = item;
                const increase =() => {toggleAmount(id, 'inc')}

                const decrease =() => {toggleAmount(id, 'dec')}


                return (

                    <article className='cart-item' key={id}>
                        <div className="title">
                            <img src={image} alt={name} />
                            <div>
                                <h5 className='name'>{name}</h5>
                                <p className='size'>size: {sizes}</p>
                                <h5 className='price-small'>${price}</h5>
                            </div>

                        </div>
                        <h5 className='price'>${price}</h5>
                        <div className="amount-btns">
                            
                            <button type='button' className='amount-btn' onClick={decrease}><AiOutlineMinus /></button>
                            <h2 className='amount'>{amount}</h2>
                            <button type='button' className='amount-btn' onClick={increase}><AiOutlinePlus /></button>
                        </div>

                        <h5 className='subtotal'>${total_amount}</h5>
                        <button className='remove-btn' onClick={()=> removeItem(id)}><BsTrashFill /></button>

                    </article>

                )
            })}
        </>
    )
}

export default CartItem

// { id, name, image, sizes, price, amount }