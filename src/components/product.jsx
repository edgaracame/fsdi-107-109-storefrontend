import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    const quantityChange = (val) => {
        setQuantity(val);
    }

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"/img/" + props.data.image}/>
            <div className="product-info">
                <div className="product-header">
                    <p className="title">{props.data.title}</p>
                    <p className="console">{props.data.console}</p>
                </div>
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
                <div className="product-buttons">
                    <QuantityPicker onChange={quantityChange}></QuantityPicker>
                    <button className="add-cart"><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></button>
                </div>
            </div>
        </div>
    )
}

export default Product;