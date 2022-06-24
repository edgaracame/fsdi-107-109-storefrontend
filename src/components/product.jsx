import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return(
        <div className="product">
            <img src="https://i.pinimg.com/originals/b5/f5/46/b5f54642fb09120bb66b49dbb27c8445.jpg" alt="" />
            <div className="product-info">
                <div className="product-header">
                    <p className="title">Arms</p>
                    <p className="console">Nintendo Switch</p>
                </div>
                <label>Price: $50.00</label>
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