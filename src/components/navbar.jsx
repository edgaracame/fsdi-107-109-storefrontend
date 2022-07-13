import { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar(){
    let [visible, setVisible] = useState(false);

    const changeVisible = () => {
        if(visible == false){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }
    
    return(
        <div className="navbar">
            <div className="header">
                <p className="logo">Aerkadia</p>

                {
                    visible ? 
                    <div className="contact">
                        <p className="contact-phone"><FontAwesomeIcon onClick={changeVisible} icon={faPhone} className="phone-icon-visible"/> 555-555-555</p>
                        <p className="contact-email"><FontAwesomeIcon onClick={changeVisible} icon={faEnvelope} className="email-icon-visible"/> aerkadia@mail.com</p>
                    </div>
                    :
                    <div className="contact">
                        <p className="contact-phone"><FontAwesomeIcon onClick={changeVisible} icon={faPhone} className="phone-icon-invisible"/></p>
                        <p className="contact-email"><FontAwesomeIcon onClick={changeVisible} icon={faEnvelope} className="email-icon-invisible"/></p>
                    </div>
                }
            </div>

            <div className="menu">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/catalog">Catalog</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/admin">Admin</Link>
                <Link className="link nav-cart" to="/cart"><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>&nbsp; Cart</Link>
            </div>
        </div>
    );
}

export default Navbar;