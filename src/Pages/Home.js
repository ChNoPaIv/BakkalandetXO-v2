import React, { Component } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Header from "./../Components/Header/Header";

import NabolagInfo from "./../Components/NabolagInfo/NabolagInfo";

import Leilighetsvelger from "./../Components/Leilighetsvelger/Leilighetsvelger";


export default class Home extends Component {

    infoRef = React.createRef();
    leiligheterRef = React.createRef();
    contactRef = React.createRef();
    state = {
        windowHeight: 0,
    }

    componentDidMount() {
        window.scrollTo(0, this.infoRef.current.offsetTop);
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
                <Navbar textColor="white" logo={"Bakkalandet XO"} array={["Info", "Leilighetsvelger", "Kontakt"]} refList={[this.infoRef, this.leiligheterRef, this.contactRef]} />
                <Header windowHeight={windowHeight} title="Bakkalandet XO" subtitle="28 leiligheter midt i kolvereid sentrum!" titleColor="#ff8800" />
                <NabolagInfo setRef={this.infoRef} />

                <Leilighetsvelger setRef={this.leiligheterRef} fstColor={"{\"strokeColor\":\"16a085\",\"strokeWidth\":3,\"fillColor\":\"16a085\",\"fillOpacity\":0.45}"} sndColor={"{\"strokeColor\":\"FF4823\",\"strokeWidth\":3,\"fillColor\":\"FF4823\",\"fillOpacity\":0.45}"} />


                <div ref={this.contactRef} className="placeholder contact" style={{height: 1000}} ></div>
            </div> 
        )
    }
}
