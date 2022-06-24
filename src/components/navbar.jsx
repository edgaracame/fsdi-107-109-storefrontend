import "./navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="header">
                <p className="logo">Aerkadia</p>

                <div className="contact">
                    <p className="contact-phone">Phone Number</p>
                    <p className="contact-email">Email</p>
                </div>
            </div>

            <div className="menu">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;