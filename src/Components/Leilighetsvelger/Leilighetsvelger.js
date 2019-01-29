import React from "react";

import $ from "jquery";

import Page from "./Page";
import Modal from "./Modal/Modal";
import Nav from "./Nav/Nav";

import dummyData from "./../../Assets/DummyData/dummyData.json";

export default class Leilighetsvelger extends React.Component {

    state = {
        bgLoading: true,
        bgImages: [],

        showFront: true,
        showSouth: false,
        showWest: false,

        showModal: false,
        modalData: {},
    }

    componentWillMount() {
        let frontBg = require("./../../Assets/Images/front.jpg");
        let southBg = require("./../../Assets/Images/sørsiden.jpg");
        let westBg = require("./../../Assets/Images/vestsiden.jpg");

        let front = new Image();
        let sor = new Image();
        let vest = new Image();

        front.src = frontBg;
        sor.src = southBg;
        vest.src = westBg;

        front.onload = () => {
            this.setState({ bgImages: [front, sor, vest] });
            this.setState({ bgLoading: false });
        }
    }

    setFront = (e) => {
        e.preventDefault();
        this.setState({showFront: true, showWest: false, showSouth: false});
    }

    setSouth = (e) => {
        e.preventDefault();
        this.setState({showFront: false, showWest: false, showSouth: true});
    }
    
    setWest = (e) => {
        e.preventDefault();
        this.setState({showFront: false, showWest: true, showSouth: false});
    }

    showModal = (e) => {
        e.preventDefault();
        let id = e.target.id;
        this.setState({showModal: true}, function() {
            this.setModalData(id, dummyData);
        });
    }

    setModalData(id, data) {
        let keys = Object.keys(data);

        keys.forEach(key => {
            for(let i = 0; i < data[key].length; i++) {
                if(data[key][i].id === id) {
                    this.setState({modalData: data[key][i]});
                    return;
                }
            }
        });
    }

    hideModal = (e) => {
        this.setState({showModal: false });
    }

    showMarkings = (e) => {
        try{
            $(".maphilight-area").wrap(function() {
                let data = window.$(this).data('maphilight') || {};
                data.alwaysOn = !data.alwaysOn;
                window.$(this).data('maphilight', data).trigger('alwaysOn.maphilight');
            });
        } catch(e) {}
    }

    render() {
        const { bgLoading, bgImages } = this.state;
        const { setRef } = this.props;

        if (bgLoading) {
            return(
                <div ref={setRef} className="leilighetsvelger-container">
                    <div className="loader-container">
                        <h2>Laster inn...</h2>
                        <div className="loader"></div>
                    </div>
                </div>
            ) 
        }

        return(
            <div ref={setRef} className="leilighetsvelger-container">
                <h2 style={style.overtitle}>Finn din leilighet her!</h2>
                <div className="leilighetsvelger" style={{position: "relative"}}>
                    <div className="velger-content">
                        <div className="leilighetsvelger-width ratio" id="leilighetsvelger-width">
                            <div className="contenido">
                            
                                { this.state.showFront ? <Page goTo={[this.setFront.bind(), this.setWest.bind(), this.setSouth.bind()]} {...this.props} bgImage={bgImages[0]} 
                                                            side="Front" data={dummyData.Front} /> : null }

                                { this.state.showWest ? <Page goTo={[this.setFront.bind(), this.setWest.bind(), this.setSouth.bind(), this.showModal.bind()]} {...this.props} bgImage={bgImages[2]} 
                                                            side="West" data={dummyData.West} /> : null}

                                { this.state.showSouth ? <Page goTo={[this.setFront.bind(), this.setWest.bind(), this.setSouth.bind(), this.showModal.bind()]} {...this.props} bgImage={bgImages[1]} 
                                                            side="South" data={dummyData.South} /> : null }

                            </div>
                        </div>
                    </div>
                    { this.state.showModal ? <Modal hideModal={this.hideModal.bind()} modalData={this.state.modalData} /> : null}

                    <Nav showBack={ !this.state.showFront ? true : false } goTo={this.setFront.bind()} showMarkings={this.showMarkings.bind()} />
                </div>
            </div>
        )
       
    }
}

const style = {
    overtitle: {
        margin: 0,
        fontWeight: '800',
        fontFamily: 'Poppins',
        textAlign: "center",
        padding: "30px 0",
    }
}