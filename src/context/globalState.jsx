import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProduct = (product) => {
        let copy = [ ...cart ];
        copy.push(product);
        setCart(copy);
    };

    const myRemoveProduct = () => {console.log("Global remove prod")};

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