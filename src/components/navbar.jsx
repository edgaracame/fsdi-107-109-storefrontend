import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="header">
                <p className="logo">Aerkadia</p>

                <div className="contact">
                    <p className="contact-phone"><FontAwesomeIcon icon={faPhone} className="phone-icon"/> 555-555-555</p>
                    <p className="contact-email"><FontAwesomeIcon icon={faEnvelope} className="email-icon"/> aerkadia@mail.com</p>
                </div>
            </div>

            <div className="menu">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;