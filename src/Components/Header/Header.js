import React from "react" 

import "./Header.css";

import BackgroundImage from "./../../Assets/Images/front.jpg";

const Header = ({windowHeight, title, subtitle, image, titleColor}) => {

    return(
        <div className="header-container" style={{background: "url(" + BackgroundImage + ")", height: windowHeight}}>
            <div style={{backgroundColor: "rgba(22, 22, 22, 0.59)", width: "100%", height: "100%"}}>
                <div className="header-text-container" >
                    <h1 className="header-title" style={{color: titleColor}}>{title}</h1>
                    <h2 className="header-subtitle">{subtitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default Header;