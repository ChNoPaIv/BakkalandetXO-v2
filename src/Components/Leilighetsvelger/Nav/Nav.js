import React from "react";

import "./Nav.css";

const Nav = ({showBack, goTo, showMarkings}) => {

    return (
        <div className="leilighetsvelger-nav-container">

            {showBack ? <button className="leilighetsvelger-nav-back-button leilighetsvelger-nav-button" onClick={(e) => goTo(e) }>Tilbake</button> : null}

            <button className="leilighetsvelger-nav-markering-button leilighetsvelger-nav-button" onClick={(e) => showMarkings(e)}>Markeringer</button>
        
        </div>
    )
}

export default Nav;