import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import accordian from '../accordianData';
import Accordian from './Accordian';
import { useGlobalContext } from '../context';
import { useCartContext } from '../contexts/cart_context';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleProduct = () => {
    const { productId } = useParams();
    const { closeSubmenu, allProducts } = useGlobalContext();
    const { addToCart } = useCartContext();

    const product = allProducts.find((product) => product.id === productId);
    const { id, name, image, price, sizes, amount } = product

    const [mainSize, setMainSize] = useState(sizes[0]);
    const [theAmount, setTheAmount] = useState(amount)

    const increase = () => {
        setTheAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;

            if (tempAmount > 5) {
                tempAmount = oldAmount
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setTheAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;

            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })

    }

    return (
        <div className="whole-container" onMouseOver={closeSubmenu}>
            <div className="singleproduct-container">
                <div className="singleproduct-image">
                    <img src={image} alt={name} />
                </div>
                <div className="singleproduct-info">
                    <h3>{name}</h3>
                    <p>${price}</p>

                    <div className="amount-btns">
                        <button type='button' className='amount-btn' onClick={decrease}><AiOutlineMinus /></button>
                        <h2 className='amount'>{theAmount}</h2>
                        <button type='button' className='amount-btn' onClick={increase}><AiOutlinePlus /></button>
                    </div>

                    <section className='select-size-container'>
                        <h4>select size</h4>

                        <div className="select-size-button-container">
                            {sizes.map((size, index) => {
                                return (
                                    <button className={`${mainSize === size ? 'select-size-btn active' : 'select-size-btn'}`} key={index} onClick={() => setMainSize(size)}>{size}</button>

                                )
                            })}
                        </div>
                    </section>

                    <div className="buttons">
                        <Link to='/shopping-cart' >
                            <button className='add-to-cart' type='button' onClick={() => addToCart(id, mainSize, theAmount, product)}>Add to Cart</button>

                        </Link>
                        <button className='buy-now'>Buy Now</button>
                    </div>

                    <div className="extra-information-container">
                        {accordian.map((items) => {
                            return <Accordian key={items.id} {...items} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct