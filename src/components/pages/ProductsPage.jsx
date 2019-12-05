import React,{useState} from 'react'
import ProductList from "../products/ProductList"
import "../../css/productsPages.css"
import {getProductsByCategory, getProductsByCollection} from "../../store/products/products"

const ProductsPage =() => {

    const [products, setProducts] = useState([])

    const getCategory = async (e) => {
        let category = e.target.value
        let array = await getProductsByCategory(category,"man")
        setProducts(array)
    }

    const getCollection = async (e) => {
        let collection = e.target.value
        let array = await getProductsByCollection(collection,"man")
        setProducts(array)
    }

    return (
        <div className="d-inline container">
            <div className="row">
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li className="p-2"><button className="btn btn-danger text-white" value="shirt" onClick={(e)=>{getCategory(e)}}>Shirts</button></li>
                        <li className="p-2"><button className="btn btn-danger text-white" value="jeans" onClick={(e)=>{getCategory(e)}}>Jeans</button></li>
                        <li className="p-2"><button className="btn btn-danger text-white" value="t-shirt" onClick={(e)=>{getCategory(e)}}>T-shirts</button></li>
                        <li className="p-2"><button className="btn btn-danger text-white" value="pull" onClick={(e)=>{getCategory(e)}}>Pulls</button></li>
                        <li className="p-2"><button className="btn btn-danger text-white" value="veste" onClick={(e)=>{getCategory(e)}}>Vestes</button></li>
                        <li className="p-2"><button className="btn btn-danger text-white" value="chaussure" onClick={(e)=>{getCategory(e)}}>Chaussures</button></li>
                    </ul>
                    <ul className="py-3 list-unstyled">
                        <li className="p-2"><button onClick={(e)=>{getCollection(e)}} value="spring" className="btn btn-primary text-white">Spring</button></li>
                        <li className="p-2"><button onClick={(e)=>{getCollection(e)}} value="summer" className="btn btn-primary text-white">Summer</button></li>
                        <li className="p-2"><button onClick={(e)=>{getCollection(e)}} value="automn" className="btn btn-primary text-white">Automn</button></li>
                        <li className="p-2"><button onClick={(e)=>{getCollection(e)}} value="winter" className="btn btn-primary text-white">Winter</button></li>
                    </ul>
                </div>
                <div className="col-10"><ProductList allProducts={products}/></div>
            </div>
            
            
        </div>
    )
}

export default ProductsPage
