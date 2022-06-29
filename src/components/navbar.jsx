import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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