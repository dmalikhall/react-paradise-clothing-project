import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import { useGlobalContext } from '../context';



const AllTops = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="whole-container" onMouseOver={closeSubmenu}>
      <div className="products-container">
        {products.filter((category) => category.mainCategory === 'all-tops')
          .map((category) => {
            const { id, name, image, price } = category;
            return (
              <Link to={`/all-tops/${category.id}`} key={id} className='product-item'>
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

export default AllTops
