import React, {useState, useEffect} from "react"
import MyCarousel from "./Carousel"
import {connect} from "react-redux"
import {addToCart} from "../../actions/productsActions"

const ProductCard = ({product, addToCart}) =>{

    const [currentColor, setColor] = useState("")

    const [currentSize, setSize] = useState({})

    const handleColor = (color) => {
        setColor(color)
    }

    const handleSize = (e, elem) => {
        setSize(elem)
    }

    const handleCart = () => {
        let cartProduct = product
        cartProduct.color = currentColor
        cartProduct.size = currentSize.size
        cartProduct.id = currentSize.id
       addToCart(cartProduct)
    }

    return (
        <div className="px-5 py-3">
            <div className="productCard">
                <MyCarousel /> 
                <div className="productInfos">  
                    <h6 className="ml-2 mt-2 font-weight-light">{product.name}</h6> 
                    <p className="ml-2 font-weight-bold productPrice">{product.price}</p>
                    <form action="" method="post">
                        <ul className="colorList list-unstyled d-flex flex-row justify-content-left">
                            {Object.keys(product.color).map((color)=>{
                                return <li className={"product"+color}>
                                <div onClick={()=> {handleColor(color)}}className="rounded-circle p-2 border border-dark m-2 d-inline-block"></div>
                            </li>
                            })}
                        </ul>
                        <ul className="sizeList list-unstyled d-flex flex-row justify-content-left">
                            {currentColor && product.color[currentColor].map((elem)=> {
                                return <li onClick={(e)=> {handleSize(e, elem)}} className="border border-dark m-2 sizeElem">{elem.size}</li>
                            })}
                        </ul>
                        <div className="row">
                            <div className="productAdd border border-dark col-7 offset-1 d-flex justify-content-around">
                                <span><i class="fas fa-shopping-bag"></i></span>
                                <span onClick={()=> {handleCart()}} className="span2">ADD TO CART</span>
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

const mapStateToProps = state=>{
    return {state}
}

const mapActionsToProps={
    addToCart : addToCart
  }

export default connect (mapStateToProps,mapActionsToProps)(ProductCard)