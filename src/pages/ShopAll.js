import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';

const ShopAll = () => {
  console.log(products);
  return (

    <div className="products">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/shop-all/${product.id}`}>more info</Link>

          </article>
        )

      })}
    </div>
  )
}

export default ShopAll