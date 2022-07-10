import { Link } from "react-router-dom"
import "./home.css";

const Home = () => {
    return(
        <div className="home">
            <div className="banner">
                <div className="middle">
                    <div className="welcome-text">
                        <p>Welcome!</p>
                        <p className="banner-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nulla laborum rem ullam facere iure culpa officia doloremque iusto nisi placeat iste blanditiis, cumque rerum.</p>
                    </div>
                </div>
            </div>

            <div className="catalog-link">
                <p>Check our amazing catalog!</p>
                <Link className="link-catalog" to="/catalog">Catalog</Link>
            </div>
        </div>
    )
}

export default Home;