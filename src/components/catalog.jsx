import { useState, useEffect } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let data = service.getCatalog();

        setProducts(data);
    }

    useEffect(() => {
        loadCatalog();
    }, []);

    return(
        <div className="catalog">
            <p className="title-catalog">This is our Amazing Catalog!</p>
            <p className="results-catalog">We have <b>{products.length}</b> products</p>

            {
                products.map((prod) => (
                    <Product key={prod.id} data={prod}></Product>
                ))
            }
        </div>
    );
}

export default Catalog;