import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    return(
        <div className="quantityPicker">
            <button onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;