import React,{ useEffect, useState} from "react"
import ProductCard from "./ProductCard"
import {getProductsByGender} from "../../store/products/products"

const ProductList = () =>{
    
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        let array = await getProductsByGender("man")
        setProducts(array)
    }

    return(
        <div>
            <button onClick={getProducts}>ICI</button>
                <ul className="list-unstyled productList row">
                {products.map((product) => {
                    console.log(product)
                   return  <li className="col-4"><ProductCard product={product} key={product.id}/></li>
                })}
                </ul>
        </div>
    )
}

export default ProductList