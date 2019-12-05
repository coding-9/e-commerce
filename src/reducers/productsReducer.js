const cart = (state=[],{type, payload}) => {
    switch(type){
        case "ADD_TO_CART" :
            if(state.cart){
                if(state.cart.find(e => e.id === payload.id)){
                    return state.cart = state.cart.map(e => e.id === payload.id? {...e, quantity:e.quantity+1}: e );
                } else{
                    return state.cart = [...state.cart,{...payload,quantity:1}];
                }
            } else{
                return state = [payload]
            }
        case "REMOVE_FROM_CART": 
            if(state.cart.find(e => e.id === payload.id && e.quantity ===1)){
                return state.cart = state.cart.filter(e => e.id !== payload.id);
            } else{
                return state.cart = state.cart.map(e => e.id === payload.id? {...e, quantity:e.quantity-1}: e );
            }
        case "CLEAR_FROM_CART":
            return state.cart = state.cart.filter(e => e.id !== payload.id)
        case "CLEAR_CART":
            return state.cart = []
        default : 
            return state.cart
    }
}

export default cart 