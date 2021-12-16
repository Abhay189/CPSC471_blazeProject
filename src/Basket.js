import React from "react";

export default function Basket(props){
    const {cartItems} = props;
    return (
        <div className="heading">
        <h1 id= "men_tops">Cart Items</h1>
        {cartItems.length === 0 && <div> Cart is Empty</div>}
        </div>
        
    );
}