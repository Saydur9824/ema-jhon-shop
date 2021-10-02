import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    const[displayProducts, setDisplayProducts] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data); 
            setDisplayProducts(data); 
        });
    },[]);

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;   
                }
                storedCart.push(addedProduct);  
            }
            setCart(storedCart);
        }
    },[products])


    const hendleToClick = Product => {
        const exists = cart.find(pd => pd.key === Product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== Product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, Product];
        }
        else{
            Product.quantity = 1;
            newCart = [...cart, Product];
        }

    // const  newCart = [...cart, Product];
      setCart(newCart);
    //   save to local storage
      addToDb(Product.key)
    }    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))

        setDisplayProducts(matchedProduct)
       
    }

    return (
       
        <>
            <div className="search-container">
                 <input
                  type="text"
                  onChange = {handleSearch}
                   placeholder = "search your product" name="" id="" />
            </div>

           <div className="shop-container">
               <div className="products">
                
                {
                    displayProducts.map(product => <Product 
                        key = {product.key}
                        product = {product}
                       hendleToClick = {hendleToClick}
                    ></Product>)
                }
                
               </div>
               <div className="cart">
                  <Cart cart = {cart}>
                      <Link to = '/review'>
                        <button className = 'button'>Review your order</button>
                      </Link>
                  </Cart>

               </div>
           </div>
        </>
    );
};

export default Shop;