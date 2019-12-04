import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CartProduct from './CartProduct'


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

                        <h1>{cart.reduce((prize=0, product)=>{
                            return prize + product.prize*product.quantity
                            },0).toFixed(2)}
                        </h1> 
                        <div className="row">
                            <div className="col-8">
                                <ul className="mr-2 p-0">
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