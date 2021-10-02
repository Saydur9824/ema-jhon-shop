import React from 'react';
// import Product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
   const{cart} = props;
   console.log(props);
   let totalQuantity = 0;
   let total = 0;
   for(const singleproduct of cart){
       if(!singleproduct.quantity){
        singleproduct.quantity = 1;

       }
    console.log(singleproduct)
       total = total + singleproduct.price * singleproduct.quantity;
       totalQuantity = totalQuantity + singleproduct.quantity;
   }

   const shipping = total > 0 ? 15 : 0;
   const tax = (total + shipping) * 0.10;
   const grandTotal = total + shipping + tax;

    return (
        <div className = "cart">
             <h3>Order Summary</h3>
            <h4>Items ordered: {totalQuantity}</h4>
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
            {props.children}
            
        </div>
    );
};

export default Cart;