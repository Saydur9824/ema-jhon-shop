import React from 'react';

const Review = (props) => {
    const{name, price, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className ='product'>
           <div>
           <h4 className = 'product-name'>{name}</h4>
            <p>price : {price}</p>
            <p>Quantity : {quantity}</p>
            <button onClick = {() => handleRemove(key)} className = 'button'>Remove</button>
           </div>
        </div>
    );
};

export default Review;