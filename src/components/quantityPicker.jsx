import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity > 1){
            let val = quantity - 1;
            setQuantity(val);
            props.onChange(val);
        }
    }

    const handleIncrease = () => {
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    return(
        <div className="quantityPicker">
            <button onClick={handleDecrease}>-</button>
            <label><p>{quantity}</p></label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;