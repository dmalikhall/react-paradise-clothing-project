import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import Error from './Error';

const JoggingPants = () => {
  const { closeSubmenu, allJoggingPantsItems, products_loading: loading, products_error: error } = useGlobalContext();
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
          allJoggingPantsItems.map((category) => {
            const { id, name, image, price } = category;
            return (
              <Link to={`/jogging-pants/${category.id}`} key={id} className='product-item'>
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


export default JoggingPants