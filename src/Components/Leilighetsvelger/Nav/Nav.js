import React from "react";

const Nav = ({showBack, goTo, showMarkings}) => {

    const containerStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        width: "100%",
        paddingTop: 20,
    }

    const backButton = {
        justifySelf: "start",
        padding: 0,
        marginLeft: 25
    }

    const markeringButton = {
        justifySelf: "end",
        paddingRight: 0,
        marginRight: 25
    }

    return (
        <div style={containerStyle} className="leilighetsvelger-nav-container">

            {showBack ? <button style={backButton} className="leilighetsvelger-nav-back" onClick={(e) => goTo(e) }>Tilbake</button> : null}

            <div style={{margin: "0 auto"}}></div>

            <button style={markeringButton} className="leilighetsvelger-nav-markering" onClick={(e) => showMarkings(e)}>Markeringer</button>
        
        </div>
    )
}

export default Nav;