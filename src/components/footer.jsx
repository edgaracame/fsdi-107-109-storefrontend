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
            <p>&copy; Castillo Medina Edgar Antonio 2022</p>
        </div>
    )
}

export default Footer;