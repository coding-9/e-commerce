import React from 'react'

const ProductsPage =() => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>Costumes</li>
                        <li>Pantalons</li>
                        <li>Pulls</li>
                        <li>T-shirts</li>
                        <li>Vestes</li>
                        <li>Chaussures</li>
                    </ul>
                </div>
                <div className="col-10"><ProductList/></div>
            </div>
            
            
        </div>
    )
}

export default ProductsPage
