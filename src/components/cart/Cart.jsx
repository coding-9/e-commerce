import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CartProduct from './CartProduct'
import "../../css/cart.css"


const Cart = ({cart}) => {

    const [pending, setPending] = useState(false)

    useEffect(() => {
       if(cart){
           setPending(true)
       }
    }, [])

    return(
        <div className="container">
            {
                pending? (
                    <div>

                        <h1>{cart.reduce((price=0, product)=>{
                            return price + product.price*product.quantity
                            },0).toFixed(2)}
                        </h1> 
                        <div className="row">
                            <div className="col-8">
                                <ul className="mr-2 p-0 cart-list">
                                    {cart.map(product => {
                                        return (
                                            <li key={product.id}>
                                                <CartProduct product={product}/>
                                            </li>  
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="col-4 bg-primary">

                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <h1>
                            0€
                        </h1>                         
                    </div>

                )
            }
        </div>
    )    
}

const mapState = state => {
    return{
        cart: state.cart
    }
}


export default connect(mapState)(Cart)