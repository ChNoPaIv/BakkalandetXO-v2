import React from "react";

import "./Modal.css";

const Modal = ({modalData, hideModal, showModal}) => {

    console.log(modalData)

    if(modalData.id === undefined) {
        return null;
    }

    const containerStyle = {
        position: "absolute" ,
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",

    }

    const modal = {
        backgroundColor: "white",
        margin: "100px auto 0px auto",
        maxWidth: 1220,
        width: "auto",
        position: "relative",
        padding: 30
    }

    const titleStyle = {
        borderLeft: "5px solid rgb(241, 145, 0)", paddingLeft: 12, 
        margin: 0, fontFamily: 'Segoe UI",Arial,sans-serif', fontWeight: '400', fontSize: 24
    }

    const topicText = {
        fontWeight: 700, width: 150,
        color: "rgb(241, 129, 0)", fontFamily: "Poppins, sans-serif"
    }

    const hideModalButton = {
        fontSize: 30, position: "absolute", right: 0, top: 0, padding: "8px 16px",
        verticalAlign: "middle", overflow: "hidden", textDecoration: "none",
        textAlign: "center", cursor: "pointer", whiteSpace: "nowrap",
    }

    const imageStyle = {
        maxWidth: "100%",
        maxHeight: 800
    }

    const modalContent = {
        display: "grid",
        gridTemplateColumns: "70% auto",
    }   



    return(
        <div className="modal-container" style={containerStyle}>
            <div className="modal" style={modal}>
                
                <span className="modal-hide" style={hideModalButton} onClick={() => hideModal()}>&times;</span>
                <div className="modal-header" style={{paddingBottom: 16}}>
                    
                    <h3 className="modal-title" style={titleStyle}>Leilighet {modalData.id} - {modalData.RomInformasjon.Etasje} Etasje</h3>

                </div>

                <div className="modal-content" style={modalContent}>
                    <div className="modal-rom-info" >
                        <table>
                            <tbody> 
                            {
                                modalData.RomInformasjon ? Object.keys(modalData.RomInformasjon).map((keyname, i) => {

                                    const kr = keyname === "Pris" || keyname === "Fellesutgifter" ? "kr" : ""
                                    const text = keyname === "Parkering" || keyname === "Heis" ? "Ja" : modalData.RomInformasjon[keyname]
                                    
                                    return(
                                        <tr key={i}>
                                            
                                            <td style={topicText}>{keyname}</td>
                                            <td>{text} {kr}</td>
                                        
                                        </tr>
                                    )
                                }) : null
                            }
                            </tbody>
                        </table>

                        { modalData.Images[0] ? <img style={imageStyle} alt={modalData.Images[0].alt} src={modalData.Images[0].url} /> : null }

                    </div>
                    <div className="modal-picture">
                
                    {
                        modalData.Images.map((image, i) => {
                            if (i === 0) { return null }
                            return <img style={imageStyle} key={i} alt={image.alt} src={image.url} />
                        })
                    }
            
                    </div>
                </div>
                
                <div className="modal-footer">

                    <em>
                        Some random text. Some random text. Some random text. Some random text. Some random text.
                    </em>
                
                </div>               
            </div>
        </div>
    )
}

export default Modal;


// <tr>
//     <td>Bruttoareal:</td>
//     <td className="modal-bruttoareal">{modalData.Bruttoareal}</td>
// </tr>
// <tr>
//     <td>Balkong/Terrase:</td>
//     <td className="modal-balkong">{modalData.Balkong}</td>
// </tr>
// <tr>
//     <td>Soverom:</td>
//     <td className="modal-soverom">{modalData.Soverom}</td>
// </tr>
// <tr>
//     <td>Parkering:</td>
//     <td className="modal-parkering">{modalData.Parking}</td>
// </tr>
// <tr>
//     <td>Heis:</td>
//     <td className="modal-heis">{modalData.Heis}</td>
// </tr>
// <tr>
//     <td>Etasje:</td>
//     <td className="modal-etasje">{modalData.Etasje}</td>
// </tr>
// <tr>
//     <td className="space"></td>
// </tr>
// <tr>
//     <td>Fellesutgifter:</td>
//     <td id="modal-fellesutgifter"></td>
// </tr>
// <tr>
//     <td>Pris:</td>
//     <td id="modal-pris"></td>
// </tr>
// <tr>
//     <td>Status:</td>
//     <td className="modal-status"></td>
// </tr>