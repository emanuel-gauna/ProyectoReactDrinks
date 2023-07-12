import { useReducer, createContext } from "react";
import PropTypes from 'prop-types';
import { actionTypes } from "../actions/cart.action";
import { cartReducer , cartInitialState } from "../reducers/cart.reducer";

const CartContext = createContext();




function CartProvider ({children}) {
    const [ state , dispatch] = useReducer(cartReducer, cartInitialState);
    
    function addToCart(drink) {
        dispatch({type: actionTypes.ADD_TO_CART, payload: drink})
    }

    function removeFromCart (idDrink){
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payload: {idDrink}})
    }

    function removeAllFromCart (idDrink) {
       dispatch({type : actionTypes.REMOVE_ALL_FROM_CART, payload: {idDrink}})
    }

    function clearCart () {
        dispatch({type: actionTypes.CLEAR_CART})
    }


    const cartValues = {
        cart: state ,
        addToCart,
        removeAllFromCart,
        removeFromCart,
        clearCart
    }

    return(
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartProvider, CartContext};