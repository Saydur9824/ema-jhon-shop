import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const{name,img,seller, price,stock ,star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = 'product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3 className = 'product-name'>{name}</h3>
            <p>by : {seller}</p>
            <p>Price : ${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <Rating 
                 initialRating={star} 
                 emptySymbol="far fa-star"
                 fullSymbol="fas fa-star icon-color"
             readonly></Rating>
            
            <br />
            <button 
              onClick = {() => props.hendleToClick(props.product)}
            className ='button'>{element} add to cart</button>

            </div>
        </div>
    );
};

export default Product;