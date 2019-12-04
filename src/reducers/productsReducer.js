const cart = (state=[],{type, payload}) => {
    switch(type){
        case "ADD_TO_CART" :
            if(state.find(e => e.id === payload.id)){
                return state = state.map(e => e.id === payload.id? {...e, quantity:e.quantity+1}: e );
            } else{
                return state = [...state,{...payload,quantity:1}];
            }
        case "REMOVE_FROM_CART": 
            if(state.find(e => e.id === payload.id && e.quantity ===1)){
                return state = state.filter(e => e.id !== payload.id);
            } else{
                return state = state.map(e => e.id === payload.id? {...e, quantity:e.quantity-1}: e );
            }
        case "CLEAR_FROM_CART":
            return state = state.filter(e => e.id !== payload.id)
        case "CLEAR_CART":
            return state = []
        default : 
            return state
    }
}

export default cart 