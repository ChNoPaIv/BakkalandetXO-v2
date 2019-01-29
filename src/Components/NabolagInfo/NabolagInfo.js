import React from "react";

import Title from "./NabolagInfoTitle";
import Images from "./NabolagInfoImages";
import Pros from "./NabolagInfoPros";

import BackgroundImage from "./../../Assets/Images/randomNature.jpg";

import { mdiCart, mdiSchool, mdiCarSide, mdiSoccer, mdiFood, mdiHospital, mdiFerry, mdiGlassCocktail } from '@mdi/js';

import bilde1 from "./../../Assets/Images/front.jpg";
import bilde2 from "./../../Assets/Images/ungdomskole.jpg";
import bilde3 from "./../../Assets/Images/kolvereid.jpg";

class NabolagInfo extends React.Component {

    render() {

        const { setRef } = this.props;

        const style = {
            backgroundImage: "url(" + BackgroundImage + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }
    
        return(
            <div ref={setRef} className="nabolaginfo-container" style={style}>
                <div style={{backgroundColor: "rgba(22, 22, 22, 0.767)"}}>
                    <Title title="" />
                    <Images images={imagesDummyData}/>
                    <Pros color="white" dataArray={prosDummyData}/>
                </div>
            </div>
        )
    }
}

const imagesDummyData = [
    {
        image: bilde1,
        title: "Bo oppå butikken!",
        subtitle: "Bakkalandet XO har en butikk i første etasje.",
        alt: "Looking 4 something..."
    },
    {
        image: bilde2,
        title: "Kort vei til skole",
        subtitle: "Nærøy Ungdomskole og Kolvereid Barneskole er like ved.",
        alt: "Looking 4 something..."
    },
    {
        image: bilde3,
        title: "Naturen er ved ytterdøren",
        subtitle: "En vei til skogs finner du",
        alt: "Looking 4 something..."
    }
]

const prosDummyData = [
    {
        type: mdiCart, title: "Rema 1000", distance: 0
    }, {
        type: mdiSchool, title: "Nærøy Ungdomskole", distance: 1.1
    }, {
        type: mdiCarSide, title: "ESSO", distance: 1
    }, {
        type: mdiSoccer, title: "Idrettshall", distance: 0.8
    }, {
        type: mdiFood, title: "Bakkaland Hotell/Resturant", distance: 0.02
    }, {
        type: mdiSchool, title: "Kolvereid Barneskole", distance: 1.1
    }, {
        type: mdiHospital, title: "Legevakta", distance: 1.5
    }, {
        type: mdiSoccer, title: "Fotballbane", distance: 0.4
    }, {
        type: mdiGlassCocktail, title: "Sea Side", distance: 0.02
    }, {
        type: mdiCart, title: "COOP Extra", distance: 0.05
    }, {
        type: mdiSoccer, title: "Idrettsanlegg", distance: 0.4
    }, {
        type: mdiFerry, title: "Småbåtshavna", distance: 1.1
    }
]

export default NabolagInfo;