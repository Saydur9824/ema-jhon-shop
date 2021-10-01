import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const[products, setProducts] = useProducts();
    const[cart, setCart] = useCart(products);
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className = 'shop-container'>
            <div className="products">
                {
                    cart.map(product => <ReviewItem 
                        key = {product.key}
                        product = {product}
                        handleRemove = {handleRemove}
                    ></ReviewItem>)
                }

            </div>
            <div className="cart">
                <Cart cart = {cart}></Cart>

            </div>
        </div>
    );
};

export default OrderReview;




{/* <h1>Order review : {products.length}</h1>
<h3>{cart.length}</h3>
<Cart cart = {cart}></Cart> */}