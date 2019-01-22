import React from "react" 

import BackgroundImage from "./../../Assets/Images/front.jpg";

const Header = ({windowHeight, title, subtitle, image}) => {

    const headerStyle = {
        background: "url(" + BackgroundImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        width: "100%",
        overflow: "hidden",
        height: windowHeight,
        position: "relative",
    }

    const textContainer = {
        textAlign: "center", 
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "50%",
        height: "20%",
        margin: "auto",
    }

    const titleStyle = {
        color: "white",
        textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    }

    const subtitleStyle = {
        color: "white",
        textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }

    return(
        <div className="header-container" style={headerStyle}>
            <div style={textContainer}>
                <h1 className="header-title" style={titleStyle}>{title}</h1>
                <h2 className="header-subtitle" style={subtitleStyle}>{subtitle}</h2>
            </div>
        </div>
    )
}

export default Header;