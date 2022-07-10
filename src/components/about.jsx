import { useState } from "react";
import "./about.css";

const About = () => {
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
        <div className="about">
            { visible ? <p onClick={changeVisible}>edgar.castillo@mail.com</p> : <button onClick={changeVisible} className="show-button">Show info</button> }
        </div>
    )
}

export default About;