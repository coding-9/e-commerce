import React,{ useEffect, useState} from "react"
import ProductCard from "./ProductCard"
// import {getProductsByGender} from "../../store/products/products"

const ProductList = ({allProducts}) =>{
    
    return(
        <div>
                {/* <button onClick={getProducts}>ICI</button> */}
                <ul className="list-unstyled productList row">
                {allProducts && (allProducts.map((product) => {
                   return  <li className="col-4"><ProductCard product={product} key={product.id}/></li>
                }))}
                </ul>
        </div>
    )
}

export default ProductList