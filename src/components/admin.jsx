import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import "./admin.css";
import DataService from "../services/dataService";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const handleProductChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = { ...product }
        copy[name] = value;
        setProduct(copy);
    }

    const addProduct = () => {
        let copy = { ...product }

        let price = parseFloat(copy.price);
        copy.price = price;
        let stock = parseFloat(copy.stock);
        copy.stock = stock;

        let service = new DataService();
        service.addProduct(copy);

        let allCopy = [ ...allProducts ];
        allCopy.push(copy);
        setAllProducts(allCopy);
    }

    const handleCouponChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = { ...coupon };
        copy[name] = value;
        setCoupon(copy);
    }

    const addCoupon  = () => {
        let copy = { ...coupon };

        let discount = parseFloat(copy.discount);
        copy.discount = discount;

        let allCopy = [ ...allCoupons ];
        allCopy.push(copy);
        setAllCoupons(allCopy);
    }

    return(
        <div className="admin">
            <p className="admin-text">Store Administration</p>

            <div className="forms">
                <div className="card product-form">
                    <div className="card-header">
                        <p>Product</p>
                    </div>
                    <div className="card-body">
                        <div className="my-control">
                            <label>Title: </label>
                            <input name="title" onChange={handleProductChange} type="text" />
                        </div>

                        <div className="my-control">
                            <label>Genre: </label>
                            <input name="genre" onChange={handleProductChange} type="text" />
                        </div>

                        <div className="my-control">
                            <label>Console: </label>
                            <select name="console" onChange={handleProductChange}>
                                <option defaultValue={""} hidden>Select...</option>
                                <option value="Nintendo Switch">Nintendo Switch</option>
                                <option value="Xbox One">Xbox One</option>
                                <option value="PlayStation 4">PlayStation 4</option>
                                <option value="PlayStation 4">PlayStation 5</option>
                            </select>
                        </div>

                        <div className="my-control">
                            <label>Price: </label>
                            <input name="price" onChange={handleProductChange} type="number" />
                        </div>

                        <div className="my-control">
                            <label>Stock: </label>
                            <input name="stock" onChange={handleProductChange} type="number" />
                        </div>

                        <div className="my-control">
                            <label>Cover: </label>
                            <input name="image" onChange={handleProductChange} type="text" />
                        </div>

                        <div className="my-control">
                            <button onClick={addProduct} className="product-button"><FontAwesomeIcon icon={faGamepad}/>&nbsp; Save Product</button>
                        </div>
                    </div>

                    <div className="product-list">
                        { allProducts.map((p, i) =>  
                        <div key={i} className="card product-list-item">
                            <p>{p.title} <br/> <span>${p.price}</span></p>
                        </div>) }
                    </div>
                </div>

                <div className="card coupon-form">
                    <div className="card-header">
                        <p>Coupon Codes</p>
                    </div>
                    <div className="card-body">
                        <div className="my-control">
                            <label>Code: </label>
                            <input name="code" onChange={handleCouponChange} type="text" />
                        </div>

                        <div className="my-control">
                            <label>Discount: </label>
                            <input name="discount" onChange={handleCouponChange} type="number" />
                        </div>

                        <div className="my-control">
                            <button onClick={addCoupon} className="coupon-button"><FontAwesomeIcon icon={faTicket}/>&nbsp; Save Coupon</button>
                        </div>
                    </div>

                    <div className="coupon-list">
                        { allCoupons.map((c, i) =>  
                        <div key={i} className="card coupon-list-item">
                            <p>{c.code} <br/> <span>{c.discount}% off</span></p>
                        </div>) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;