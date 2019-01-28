import React, { Component } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Header from "./../Components/Header/Header";

import NabolagInfo from "./../Components/NabolagInfo/NabolagInfo";

import Leilighetsvelger from "./../Components/Leilighetsvelger/Leilighetsvelger";


export default class Home extends Component {

    state = {
        windowHeight: 0
    }

    componentWillMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ windowHeight: window.innerHeight});
    }

    render() {

        const { windowHeight } = this.state;

        return(
            <div className="home-container">
                <Navbar textColor="white" logo={"Bakkalandet XO"} array={["Home", "Info", "Leilighetsvelger", "Kontakt"]} />
                <Header windowHeight={windowHeight} title="Bakkalandet XO" subtitle="28 leiligheter midt i kolvereid sentrum!" titleColor="#ff8800" />
                <NabolagInfo />

                <Leilighetsvelger fstColor={"{\"strokeColor\":\"16a085\",\"strokeWidth\":3,\"fillColor\":\"16a085\",\"fillOpacity\":0.45}"} sndColor={"{\"strokeColor\":\"FF4823\",\"strokeWidth\":3,\"fillColor\":\"FF4823\",\"fillOpacity\":0.45}"} />


                <div className="placeholder contact" style={{height: 1000}} ></div>
            </div>
        )
    }
}
