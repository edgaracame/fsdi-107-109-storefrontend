import { useState } from "react";
import "./footer.css";

function Footer(){
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
        <div className="footer">
            { visible ? <p onClick={changeVisible}>&copy; Castillo Medina Edgar Antonio 2022</p> : <button onClick={changeVisible} className="show-button">Show info</button> }
        </div>
    )
}

export default Footer;