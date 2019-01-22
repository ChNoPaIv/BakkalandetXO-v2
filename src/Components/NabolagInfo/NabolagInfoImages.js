import React from "react";

const NabolagInfoImages = ({images}) => {

    console.log(images);

    const imageStyle = {
        objectFit: "cover",
        borderRadius: "50%",
        height: 210,
        width: 210,
    }

    const divImage = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        height: 220,
        width: 220,
        backgroundColor: "rgba(255, 255, 255, 0.719)"
    }

    const divImage2 = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        height: 230,
        width: 230,
        backgroundColor: "rgba(255, 255, 255, 0.671)",
        margin: "0 auto",
    }

    const container = {
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "repeat(auto-fit, 400px)",
        alignItems: "center",
        justifyContent: "center",
    }

    const titleStyle = {
        textAlign: "center", fontFamily: "Poppins, sans-serif", color: "white", fontWeight: 400, fontSize: 24, margin: 0, padding: "10px 0 0 0"
    }

    const subtitleStyle = {
        textAlign: "center", fontFamily: "Poppins, sans-serif", color: "white", margin: 0, padding: 0
    }
    
    return(
        <div className="nabolaginfo-picture-container" style={container}>
        {
            images.map((elem, i) => {
                return (
                    <div className="nabolaginfo-picture" key={i} style={{width: "auto", height: 400}}>
                    
                        <div style={divImage2}><div style={divImage}><img style={imageStyle} alt={elem.alt} src={elem.image}/></div></div>
                        <h3 style={titleStyle}>{elem.title}</h3>
                        <p style={subtitleStyle}>{elem.subtitle}</p>
                        
                    </div>
                )
            })
        }
        </div>
    )
}

export default NabolagInfoImages;