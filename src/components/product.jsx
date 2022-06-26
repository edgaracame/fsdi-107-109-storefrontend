import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    return(
        <div className="product">
            <img src={"/img/" + props.data.image}/>
            <div className="product-info">
                <div className="product-header">
                    <p className="title">{props.data.title}</p>
                    <p className="console">{props.data.console}</p>
                </div>
                <label>Price: ${props.data.price}</label>
                <label>Total: $100.00</label>
                <div className="product-buttons">
                    <QuantityPicker></QuantityPicker>
                    <button className="add-cart">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product;