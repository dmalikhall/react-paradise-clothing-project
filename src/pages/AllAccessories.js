import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import { useGlobalContext } from '../context';

const AllAccessories = () => {
  const { closeSubmenu, allAccessoryItems } = useGlobalContext();
  return (
    <div className="whole-container" onMouseOver={closeSubmenu}>
      <div className="products-container">
        {
          allAccessoryItems.map((category) => {
            const { id, name, image, price } = category;
            return (
              <Link to={`/all-accessories/${category.id}`} key={id} className='product-item'>
                <div className="product-image">
                  <img src={image} alt={name} />
                </div>
                <h5>{name}</h5>
                <p>${price}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

// products.filter((category) => category.mainCategory === 'all-accessories')

export default AllAccessories