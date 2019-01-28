import React from "react";

import Icon from '@mdi/react'

import "./NabolagInfoPros.css";

import AOS from "aos";
import 'aos/dist/aos.css';

const NabolagInfoPros = ({dataArray, color}) => {

    AOS.init();

    const title = { fontFamily: 'Poppins, sans-serif', color: color, justifySelf: "start", paddingLeft: 7, margin: 0 }
    const distance = { fontFamily: 'Poppins, sans-serif', color: color, justifySelf: "end", margin: 0}

    return(
        <div className="nabolaginfo-pros-container" data-aos="zoom-in" data-aos-duration="600">

            {
                dataArray.map((elem, i) => {
                    return (
                        <div key={i} className="nabolaginfopros-item">
                        
                            <div className="nabolaginfopros-svg-container"><Icon style={{margin: "0 auto", display: "block"}} path={elem.type} size={1} color={color}></Icon></div>
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