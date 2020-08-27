import React, { useState } from 'react';
import fakeData from '../fakeData';
import Product from '../Product/Product';
import './Courses.css';
import Cart from '../Cart/Cart';


const Courses = () => {
    //console.log(fakeData);
    const [products,setProducts] = useState(fakeData);
    const [cart,setCart]= useState([]);

    const handleAddProduct=(product) =>{
        // console.log('memememe',product);
        const newCart= [...cart, product];
        setCart(newCart);
        
    }
    

    return (
        <div className="container">
            <div className=" row">
            <div className="col-md-8">
               
                
                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)
                }
                <br/>
            </div>
                <div className="col-md-4 cart-summary">
                     <br/>  
                    <Cart cart={cart}></Cart>

                </div>
            
            </div>
        </div>
    );
};

export default Courses;