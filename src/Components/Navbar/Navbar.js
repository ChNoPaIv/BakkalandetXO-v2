import React from "react";

const NavbarComp = ({logo, array, textColor}) => {

    const container = {
        display: "flex",
        width: "100%",
        padding: 0,
        listStyle: "none",
        position: "absolute",
        zIndex: 1
    }

    const logoContainer = {
        padding: "10px 20px",
        color: textColor,
    }

    const navbarStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "center",

    }

    return(
        <ul className="navbar-container" role="navigation" style={container}>
            <li><div className="navbar-logo-container" style={logoContainer}>{logo}</div></li>

            <li style={{margin: "0 auto"}}><div className="navbar-space" ></div></li>

            <li><div className="navbar" style={navbarStyle}>

                {
                    array.map((text, i) => {
                        const textStyle = {
                            padding: "10px 20px",
                            color: textColor,
                        }
                        return <div key={i} style={textStyle}>{text}</div>
                    })
                }
            </div></li>
        </ul>
    )
}

export default NavbarComp;