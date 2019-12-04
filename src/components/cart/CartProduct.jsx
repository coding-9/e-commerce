import React from 'react';
import {connect} from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import photo from '../img/_MG_6762.jpg'
import '../css/cart.css'
import {
    addToCart,
    removeFromCart,
    clearFromCart
} from '../actions/productsActions'

export const CartProduct = ({
    product,
    addToCart,
    removeFromCart,
    clearFromCart
}) => {
    const add = () =>{
        console.log(product);
        
        addToCart(product)
    }

    const remove = () =>{
        removeFromCart(product)
    }

    const clear = () =>{
        clearFromCart(product)
    }
    return(
        <div className="w-100">
            <div className="d-flex justify-content-end price">{(product.prize*product.quantity)}€</div>
            <div className="row">
                <div className="col-2 d-flex justify-content-center">
                    <img src={photo} alt=""/>
                </div>
                <div className="col-7">
                    <div className="d-flex flex-column justify-content-center h-100">
                        <a href="#">{product.name}</a>
                        <span>Taille: {product.sizes[0]}</span>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="cartBox row">
                        <div className="quantity col-8 p-0 d-flex justify-content-center align-items-center">{product.quantity}</div>
                        <div className="col-4 p-0 d-flex flex-column">
                            <button onClick={add} className="btn btn-sm">+</button>
                            <button onClick={remove} className="btn btn-sm">-</button>
                        </div>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                    <button onClick={clear} className="bin btn" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" class="axsvgicon axsvgicon-corbeille" aria-hidden="true"> <rect x="66.09" y="66.09" width="139.13" height="173.91" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></rect> <rect x="100.87" y="40" width="69.57" height="26.09" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></rect> <line x1="44.35" y1="66.09" x2="235.65" y2="66.09" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></line> <line x1="100.87" y1="96.52" x2="100.87" y2="200.87" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></line> <line x1="135.65" y1="96.52" x2="135.65" y2="200.87" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></line> <line x1="170.43" y1="96.52" x2="170.43" y2="200.87" fill="none" stroke="#042b35" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></line></svg></button>
                </div>
            </div>
            <hr/>
        </div>
    )
    
}

const mapState = state => state

const mapActions = {
    addToCart,
    removeFromCart,
    clearFromCart
}

export default connect(mapState, mapActions)(CartProduct)
