import React from "react";
import Product from "./Product";
import RightColumn from './RightColumn';
import data from "./ClothData";



export default function Main(props){
    const {prod} = props;
    return(
        <main> 
            <div className= "row"> 
                {prod.map((product) =>(
                    <Product key = {product.id} product= {product}> </Product>
                ))}
            </div>
        </main>
    );
}