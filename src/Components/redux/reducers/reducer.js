
const INIT_STATE = {


carts:[]
}

export const CartReducer  = (state= INIT_STATE,action)=> {

switch(action.type) {
        case "ADD_CART":  
        return{
            ...state,carts:[...state.carts,
                action.payload]}

    case "REMOVE_CART": return {

    }
          default : return state
}
}