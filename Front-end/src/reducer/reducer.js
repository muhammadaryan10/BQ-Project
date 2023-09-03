const INITIALSTATE={
    carts:[]
}
export const CartReducer=(state=INITIALSTATE,action)=>{
    switch(action.type){
        case"Add_to_cart":
        return {
            ...state,
        carts:[...state.carts,action.payload]
    };
    case"Remove_from_cart":
    
        const updatedCarts = [...state.carts];
        updatedCarts.splice(action.payload, 1); // Remove the item from the cart at the specified index
        return { ...state, carts: updatedCarts };
    default :
    return state
    }

}
