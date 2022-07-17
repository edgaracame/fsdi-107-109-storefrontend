import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProduct = (product) => {
        let copy = [ ...cart, product ];
        setCart(copy);
    };

    const myRemoveProduct = (productId) => {
        let copy = cart.filter(p => p.id != productId);
        setCart(copy);
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProduct: myAddProduct,
            removeProduct: myRemoveProduct,
        }}>
            { props.children }
        </StoreContext.Provider>
    );
}

export default GlobalState;