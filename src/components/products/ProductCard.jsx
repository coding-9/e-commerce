import React, {useState} from "react"
import MyCarousel from "./Carousel"

const ProductCard = (props) =>{
    const [product,setProduct] = useState([])
    
    const getProducts = async () => {
        await setProduct(props.product)
    }

    const handleClick = () => {
        getProducts()
        console.log(product)
    }

    return (
        <div className="px-5 py-3">
            <div className="productCard">
                <MyCarousel number={props.number} /> 
                <div className="productInfos">  
                    <h6 className="ml-2 mt-2 font-weight-light">{product.name}</h6> 
                    <p className="ml-2 font-weight-bold productPrice">*Price*</p>
                    <form action="" method="post">
                        <ul className="colorList list-unstyled d-flex flex-row justify-content-left">
                            <li>
                                <div onClick={handleClick} className="rounded-circle bg-warning p-2 border border-dark m-2 d-inline-block"></div>
                            </li>
                            <li>
                                <div className="rounded-circle bg-danger p-2 border border-dark m-2 d-inline-block"></div>
                            </li>
                            <li>
                                <div className="rounded-circle bg-success p-2 border border-dark m-2 d-inline-block"></div>
                            </li>
                        </ul>
                        <ul className="sizeList list-unstyled d-flex flex-row justify-content-left">
                            <li className="border border-dark m-2 sizeElem">XS</li>
                            <li className="border border-dark m-2 sizeElem">S</li>
                            <li className="border border-dark m-2 sizeElem">M</li>
                            <li className="border border-dark m-2 sizeElem">L</li>
                            <li className="border border-dark m-2 sizeElem">XL</li>
                        </ul>
                        <div className="row">
                            <div className="productAdd border border-dark col-7 offset-1 d-flex justify-content-around">
                                <span className="d-none span1">ADD TO CART</span>
                                <span><i class="fas fa-shopping-bag"></i></span>
                                <span className="span2">ADD TO CART</span>
                            </div>
                        </div>
                        <div className="p-2">
                            <span className="mx-1"><i class="fas fa-star"></i></span>
                            <span className="mx-1"><i class="fas fa-star"></i></span>
                            <span className="mx-1"><i class="fas fa-star"></i></span>
                            <span className="mx-1"><i class="fas fa-star-half-alt"></i></span>
                            <span className="mx-1"><i class="far fa-star"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    )
}
export default ProductCard