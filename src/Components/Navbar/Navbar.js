import React from "react";

import "./Navbar.css";

class Navbar extends React.Component {

    state = {
        refList: this.props.refList,
    }

    goTo = (ref) => {
        window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' });
    }

    render() {
        const {refList} = this.state;
        const {logo, array, textColor} = this.props; 


        return(
            <ul className="navbar-container" role="navigation">
                <li><div className="navbar-logo-container" style={{color: textColor}}>{logo}</div></li>
    
                <li><div className="navbar-goto">
    
                    {
                        array.map((text, i) => {
                            const textStyle = { color: textColor}
                            const ref = refList[i];

                            return <p key={i} onClick={(e) => this.goTo(ref)} className="navbar-goto-text" style={textStyle}>{text}</p>
                        })
                    }
                </div></li>
            </ul>
        )
    }
}

export default Navbar;