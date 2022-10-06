import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import accordian from '../accordianData';
import Accordian from './Accordian';
import { useGlobalContext } from '../context';
import ShoppingCart from './ShoppingCart';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import exampleProducts from '../exampleproducts';


const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { id, name, image, price, sizes,  } = product
    const { closeSubmenu, addToCart, increaseItem, decreaseItem, amount } = useGlobalContext();

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
                        <button type='button' className='amount-btn' onClick={()=> decreaseItem(id)}><AiOutlineMinus/></button>
                        <h2 className='amount'>{amount}</h2>
                        <button type='button' className='amount-btn' onClick={()=> increaseItem(id)}><AiOutlinePlus/></button>
                    </div>


                    <div className="buttons">
                        <button className='add-to-cart' type='button'>
                            Add to Cart
                        </button>

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