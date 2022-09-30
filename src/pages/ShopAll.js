import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import { useGlobalContext } from '../context';


const ShopAll = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="whole-container" onMouseOver={closeSubmenu}>
      <div className="products-container">
        {products.map((product) => {
          const { id, name, image, price } = product;
          return (
            <Link to={`/shop-all/${product.id}`} key={id} className='product-item'>
              <div className="product-image">
                <img src={image} alt={name} />
              </div>
              <h5>{name}</h5>
              <p>${price}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ShopAll