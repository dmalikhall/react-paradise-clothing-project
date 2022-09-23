import React from 'react'
import { Link, useParams } from 'react-router-dom';

import products from '../data';

const SingleProduct = () => {
    const { productId } = useParams();
    const oneProduct = products;
    
    const product = oneProduct.find((product) => product.id === productId);
    console.log(product);
    

    

    

    return (
        <div className="section">
            <h5>{}</h5>

        </div>

    )
}

export default SingleProduct