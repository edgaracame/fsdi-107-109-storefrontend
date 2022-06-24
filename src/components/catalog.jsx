import "./catalog.css";
import Product from "./product";

const Catalog = () => {
    return(
        <div className="catalog">
            <p className="title">This is our Amazing Catalog!</p>
            <p className="results">We have # products</p>

            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;