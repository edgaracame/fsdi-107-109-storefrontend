import { useState, useContext} from "react";
import StoreContext from "../context/storeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cartproduct.css";

const CartProduct = (props) => {
    const removeProduct = useContext(StoreContext).removeProduct;

    const getTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }

    const handleRemove = () => {
        removeProduct(props.data.id);
    }

    return (
        <div className="cart-item">
            <img src={"/img/" + props.data.image} />
            <div className="cart-info">
                <p className="cart-item-title"><b>{props.data.title}</b> x{props.data.quantity}</p>
                <p className="cart-item-console">Console: {props.data.console}</p>
                <p className="cart-item-price">Price: ${props.data.price.toFixed(2)}</p>
                <p className="cart-item-total">Total: <b>${getTotal()}</b></p>
            </div>
            <div className="cart-buttons">
                <button onClick={handleRemove} className="cart-item-delete"><FontAwesomeIcon icon={faTrash} className="cart-item-delete-icon"/></button>
            </div>
        </div>
    )
}

export default CartProduct;