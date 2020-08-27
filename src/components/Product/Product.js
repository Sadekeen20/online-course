import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    return (
        <div className="product row">
            <div className="col-md-4 d-flex align-items-center">
                <img src={props.product.img} alt="" className="img-control"/>
            </div>
            <div className="col-md-8">
                <h3>{props.product.name}</h3>
                <p><small>Rating : {props.product.rating}</small></p>    
                <p>Duration: {props.product.duration }</p>    
                <h5 className="text-success">Only At: <b>{props.product.price}$</b></h5>    
                
                <button className="btn btn-outline-primary"
                 onClick={() => props.handleAddProduct(props.product)}
                >Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Product;