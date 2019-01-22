import React from "react";

const NabolagInfoTitle = (props) => {

    const titleStyle = {
        textAlign: "center", fontWeight: 400, fontFamily: "Poppins, sans-serif", color: "white", margin: 0, paddingTop: 70, paddingBottom: 70
    }

    return(
        <div className="nabolaginfo-title-container">
            <h1 style={titleStyle}>Alt i nærheten!</h1>
        </div>
    )
}

export default NabolagInfoTitle;