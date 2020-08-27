import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
        let total=0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total=total+product.price;
            
        }

        const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }
    return (
        <div>
            <h4><u>Order Summary</u></h4>
           
            <p>Items ordered {cart.length}</p>
           
            <p>Total Price:{formatNumber(total)}</p>
        </div>
    );
};

export default Cart;