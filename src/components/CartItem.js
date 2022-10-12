
import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useCartContext } from '../contexts/cart_context';


const CartItem = () => {
    const { cart, removeItem, toggleAmount } = useCartContext();

    return (
        <>
            {cart.map((item) => {
                const { id, name, sizes, amount, image, price } = item;
                const increase = () => { toggleAmount(id, 'inc') }

                const decrease = () => { toggleAmount(id, 'dec') }

                return (
                    <article className='cart-item' key={id}>
                        <div className="title">
                            <img src={image} alt={name} />
                            <div className='mycart-item_info-container'>
                                <div className="mycart-item_info">
                                    <h5 className='name'>{name}</h5>
                                    <p className='size'>size: {sizes}</p>
                                    <h5 className='price-small'>${price}</h5>

                                </div>


                                <div className="mobile_ab-rb">
                                    <div className="mobile_amount-btns">
                                        <button type='button' className='mobile_shopping-cart_amount-btn' onClick={decrease}><AiOutlineMinus /></button>
                                        <h2 className='mobile_shopping-cart_amount'>{amount}</h2>
                                        <button type='button' className='mobile_shopping-cart_amount-btn' onClick={increase}><AiOutlinePlus /></button>
                                    </div>

                                    <button className='remove-btn' onClick={() => removeItem(id)}><BsTrashFill /></button>
                                </div>

                            </div>
                        </div>
                        <h5 className='price'>${price}</h5>
                        <div className="shopping-cart_amount-btns">
                            <button type='button' className='shopping-cart_amount-btn' onClick={decrease}><AiOutlineMinus /></button>
                            <h2 className='shopping-cart_amount'>{amount}</h2>
                            <button type='button' className='shopping-cart_amount-btn' onClick={increase}><AiOutlinePlus /></button>
                        </div>

                        <h5 className='subtotal'>${price * amount}</h5>
                        <button className='remove-btn' onClick={()=> removeItem(id)}><BsTrashFill /></button>

                    </article>

                )
            })}
        </>
    )
}

export default CartItem

