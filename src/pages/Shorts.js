import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import Error from './Error';

const Shorts = () => {
  const { closeSubmenu, allShortsItems, products_loading: loading, products_error: error } = useGlobalContext();
  if(loading) {
    return <Loading/>
  }
  if(error) {
    return <Error/>
  }
  return (
    <div className="whole-container" onMouseOver={closeSubmenu}>
      <div className="products-container">
        {
          allShortsItems.map((category) => {
            const { id, name, image, price } = category;
            return (
              <Link to={`/shorts/${category.id}`} key={id} className='product-item'>
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

// products.filter((category) => category.subCategory === 'shorts')

export default Shorts