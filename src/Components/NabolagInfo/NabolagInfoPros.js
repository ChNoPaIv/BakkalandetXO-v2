import React from "react";

import Icon from '@mdi/react'

const NabolagInfoPros = ({dataArray, color}) => {

    const title = { fontFamily: 'Poppins, sans-serif', color: color, justifySelf: "start", paddingLeft: 7, margin: 0 }
    const distance = { fontFamily: 'Poppins, sans-serif', color: color, justifySelf: "end", margin: 0}

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 360px)",
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 1460,
        margin: "0 auto",
        padding: "0 40px 70px 40px",
        gridColumnGap: 30,
        
    }

    const itemsStyle = {
        display: "grid", gridTemplateColumns: "40px auto auto",
        alignItems: 'center',
        padding: 10,
        borderBottom: "1px solid rgba(255, 255, 255, 0.274)",
    }

    const svgContainer = {
        justifySelf: "start",
        width: 40, height: 40, borderRadius: "50%", 
        backgroundColor: "#ff5100", 
        display: "flex", alignItems: "center"
    }

    return(
        <div className="nabolaginfo-pros-container" style={containerStyle}>

            {
                dataArray.map((elem, i) => {
                    return (
                        <div key={i} style={itemsStyle}>
                        
                            <div style={svgContainer}><Icon style={{margin: "0 auto", display: "block"}} path={elem.type} size={1} color={color}></Icon></div>
                            <p style={title}>{elem.title}</p>
                            <p style={distance}>{elem.distance}<span> km</span></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NabolagInfoPros;