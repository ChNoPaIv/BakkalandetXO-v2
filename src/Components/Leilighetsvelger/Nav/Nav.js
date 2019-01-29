import React from "react";

import "./Nav.css";

import { faFilter, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({showBack, goTo, showMarkings}) => {

    return (
        <div className="leilighetsvelger-nav-container">

            {showBack ? <button className="leilighetsvelger-nav-back-button leilighetsvelger-nav-button" onClick={(e) => goTo(e) }><FontAwesomeIcon icon={faChevronLeft} />Tilbake</button> : null}

            <button className="leilighetsvelger-nav-markering-button leilighetsvelger-nav-button" onClick={(e) => showMarkings(e)}><FontAwesomeIcon icon={faFilter} />Markeringer</button>
        
        </div>
    )
}

export default Nav;