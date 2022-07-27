import { useState, useEffect } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        let service = new DataService();
        let data = await service.getCatalog();

        setProducts(data);
    }

    useEffect(() => {
        loadCatalog();
    }, []);

    return(
        <div className="catalog">
            <div className="catalog-header">
                <p className="title-catalog">This is our amazing virtual gallery!</p>
                <p className="results-catalog">We have <b>{products.length}</b> products</p>
            </div>

            { products.map((prod) => (
                    <Product key={prod.id} data={prod}></Product>
                )) }
        </div>
    );
}

export default Catalog;