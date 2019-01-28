import React from "react";

import AOS from "aos";
import 'aos/dist/aos.css';

import "./NabolagInfoImages.css";

const NabolagInfoImages = ({images}) => {

    AOS.init();

    return(
        <div className="nabolaginfo-picture-container" data-aos="fade-down" data-aos-duration="1000">
        {
            images.map((elem, i) => {
                return (
                    <div key={i} className="nabolaginfo-picture" style={{width: "auto", height: 400}}>
                    
                        <div className="nabolaginfo-picture-frame">
                            <div className="nabolaginfo-picture-frame">
                                <img className="nabolaginfo-picture-image" alt={elem.alt} src={elem.image}/>
                            </div>
                        </div>
                        <h3 className="nabolaginfo-picture-title nabolaginfo-picture-text">{elem.title}</h3>
                        <p className="nabolaginfo-picture-subtitle nabolaginfo-picture-text">{elem.subtitle}</p>
                            
                    </div>
                )
            })
        }
        </div>
    )
}

export default NabolagInfoImages;