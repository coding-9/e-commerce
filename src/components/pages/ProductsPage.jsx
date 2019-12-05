import React,{useState} from 'react'
import ProductList from "../products/ProductList"
import "../../css/productsPages.css"
import {getProductsByCategory} from "../../store/products/products"

const ProductsPage =() => {

    const [products, setProducts] = useState([])

    const getProducts = async (e) => {
        let category = e.target.value
        let array = await getProductsByCategory(category,"man")
        setProducts(array)
    }

    return (
        <div className="d-inline container">
            <div className="row">
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li className="p-2"><button value="shirt" onClick={(e)=>{getProducts(e)}}>Shirts</button></li>
                        <li className="p-2"><button value="jeans" onClick={(e)=>{getProducts(e)}}>Jeans</button></li>
                        <li className="p-2"><button value="t-shirt" onClick={(e)=>{getProducts(e)}}>T-shirts</button></li>
                        <li className="p-2"><button value="pull" onClick={(e)=>{getProducts(e)}}>Pulls</button></li>
                        <li className="p-2"><button value="veste" onClick={(e)=>{getProducts(e)}}>Vestes</button></li>
                        <li className="p-2"><button value="chaussure" onClick={(e)=>{getProducts(e)}}>Chaussures</button></li>
                    </ul>
                </div>
                <div className="col-10"><ProductList allProducts={products}/></div>
            </div>
            
            
        </div>
    )
}

export default ProductsPage
