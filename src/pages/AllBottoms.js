import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import Error from './Error';

const AllBottoms = () => {
  const { closeSubmenu, allBottomItems, products_loading: loading, products_error: error } = useGlobalContext();
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
          allBottomItems.map((category) => {
            const { id, name, image, price } = category;
            return (
              <Link to={`/all-bottoms/${category.id}`} key={id} className='product-item'>
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

// products.filter((category) => category.mainCategory === 'all-bottoms')

export default AllBottoms