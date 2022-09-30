import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import accordian from '../accordianData';
import Accordian from './Accordian';
import { useGlobalContext } from '../context';

const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { name, image, price } = product
    const { closeSubmenu } = useGlobalContext();

    return (
        <div className="whole-container" onMouseOver={closeSubmenu}>
            <div className="singleproduct-container">
                <div className="singleproduct-image">
                    <img src={image} alt={name} />
                </div>
                <div className="singleproduct-info">
                    <h3>{name}</h3>
                    <p>${price}</p>
                    <div className="buttons">
                        <button className='add-to-cart'>Add to Cart</button>
                        <button className='buy-now'>Buy Now</button>
                    </div>

                    <div className="extra-information-container">
                        {accordian.map((items) => {
                            return <Accordian key={items.id} {...items}/>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct