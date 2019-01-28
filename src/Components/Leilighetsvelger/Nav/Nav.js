import React from "react";

import "./Nav.css";

const Nav = ({showBack, goTo, showMarkings}) => {

    return (
        <div className="leilighetsvelger-nav-container">

            {showBack ? <button className="leilighetsvelger-nav-back-button" onClick={(e) => goTo(e) }>Tilbake</button> : null}

            <div style={{margin: "0 auto"}}></div>

            <button className="leilighetsvelger-nav-markering-button" onClick={(e) => showMarkings(e)}>Markeringer</button>
        
        </div>
    )
}

export default Nav;