import React, { Component } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Header from "./../Components/Header/Header";

import NabolagInfo from "./../Components/NabolagInfo/NabolagInfo";

import Leilighetsvelger from "./../Components/Leilighetsvelger/Leilighetsvelger";


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 0
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        this.setState({ windowHeight: window.innerHeight});
    }

    render() {
        return(
            <div className="home-container">
                <Navbar textColor="white" logo={"Bakkalandet XO"} array={["Home", "Info", "Leilighetsvelger", "Kontakt"]} />
                <Header windowHeight={this.state.windowHeight} title="Bakkalandet XO" subtitle="Something cool I guess..." />
                <NabolagInfo />

                <Leilighetsvelger fstColor={"{\"strokeColor\":\"16a085\",\"strokeWidth\":3,\"fillColor\":\"16a085\",\"fillOpacity\":0.45}"} sndColor={"strokeColor\":\"16a085\",\"strokeWidth\":3,\"fillColor\":\"16a085\",\"fillOpacity\":0.45"} />


                <div className="placeholder contact" style={{height: 1000}} ></div>
            </div>
        )
    }
}