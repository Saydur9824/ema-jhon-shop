import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const[products, setProducts] = useProducts();
    const[cart, setCart] = useCart(products);
    const history = useHistory()
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleReview = () =>{
        history.push('/PleaseOrder');
        setCart([]);
        clearTheCart();
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
                <Cart cart = {cart}>
                  <button onClick = {handleReview} className = 'button'>please order</button>
                </Cart>

            </div>
        </div>
    );
};

export default OrderReview;

