import React from 'react';
import products from './products.json'

const Product = (props) => {
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id)
    let {name, imgUrl, description} = product
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt=""/>
            <p>{description}</p>
            <button onClick={() => props.history.push('/products')}>Back</button>
        </div>
    );
};

export default Product;