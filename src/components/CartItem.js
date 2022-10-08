
import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useGlobalContext } from "../context";
import exampleProducts from "../exampleproducts";

const CartItem = () => {
    
    
    return (
        <h1>Cart Item</h1>
        // <article className='cart-item'>
        //     <div className="title">
        //         <img src={image} alt={name} />
        //         <div>
        //             <h5 className='name'>{name}</h5>
        //             <p className='size'>size: {sizes}</p>
        //             <h5 className='price-small'>${price}</h5>
        //         </div>

        //     </div>
        //     <h5 className='price'>${price}</h5>
        //     <div className="amount-btns">
        //         <button type='button' className='amount-btn' ><AiOutlineMinus /></button>
        //         <h2 className='amount'>{amount}</h2>
        //         <button type='button' className='amount-btn' ><AiOutlinePlus /></button>
        //     </div>

        //     <h5 className='subtotal'>$49.99</h5>
        //     <button className='remove-btn' ><BsTrashFill /></button>

        // </article>
    )
}

export default CartItem

// { id, name, image, sizes, price, amount }