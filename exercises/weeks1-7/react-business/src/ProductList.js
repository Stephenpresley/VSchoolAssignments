import React from 'react';
import products from './products.json'

import {Link} from 'react-router-dom'

const ProductList = () => {
    const imgstyle = {
        width: '100px',
        height: '100px',

    }
    const prodMap = products.map(product => <Link   key={product._id}
                                                    to={`/products/${product._id}`}
                                                    >
                                                    {product.name}
                                                    <img style={imgstyle} src={product.imageUrl} alt={product.imageUrl}/>
                                                    </Link>)
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Here are just a few of our Products:</h1>
            <div className='products'>
                {prodMap}
            </div>
        </div>
    );
};

export default ProductList;