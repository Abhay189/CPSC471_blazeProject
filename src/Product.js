import React from 'react'
import data from "./ClothData";

export default function Product(props) {
    const {product} = props
    return (
        <div>
            <img className= "small" src = {product.image}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
    )
}

