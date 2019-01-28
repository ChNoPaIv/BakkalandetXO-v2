import React from "react";
import "./Page.css";
import $ from "jquery";

class Page extends React.Component {

    componentDidMount() {
        this.setMaphilight();
    }

    setMaphilight() {
        window.$('img[usemap]').maphilight();
        window.$('img[usemap]').rwdImageMaps();
        
        $(window).resize(function() {
            window.$('img[usemap]').maphilight();
        });
    }

    goTo(e, goTo) {
        e.preventDefault();
        if(goTo === "West") {
            this.props.goTo[1](e);
        } else if (goTo === "South") {
            this.props.goTo[2](e);
        } else if (goTo === "Front"){
            this.props.goTo[0](e);
        } else {
            this.props.goTo[3](e);
        }
    }

    render() {

        const {fstColor, sndColor, data, side, bgImage} = this.props;

        return(
            <div className={"leilighetsvelger" + side + "-container"}>

                {
                    side === "Front" ? 
                        <React.Fragment>
                        
                        <div className="front-name-tag-vest-container front-nametag-container">
                            <div onClick={(e) => this.goTo(e, data[1].goTo)} className="front-name-tag-vest front-nametag"><div>Vestsiden</div></div>
                        </div>

                        <div className="front-name-tag-sor-container front-nametag-container">
                            <div onClick={(e) => this.goTo(e, data[0].goTo)} className="front-name-tag-sor front-nametag"><div>Sørsiden</div></div>
                        </div>
                        
                        </React.Fragment> : null
                }

                <img id={"leiligheter" + side} useMap={"#map-" + side} src={bgImage.src} alt="" style={{width: "100%"}} />
                <map id={"map-" + side} name={"map-" + side} >
                
                    {
                        data.map((item, i) => {
                            let colorChoose = fstColor;

                            try{
                                colorChoose = item.RomInformasjon.Status === "Solgt!" ? sndColor : fstColor
                            } catch(e){}

                            return <area id={item.id} className={"maphilight-area"} key={i} alt="" onClick={(e) => this.goTo(e, item.goTo)} shape="poly" data-maphilight={colorChoose} coords={item.coords} />
                        })
                    }
                
                </map>
            </div>
        )
    }
}

export default Page;