import React from "react";

import $ from "jquery";

class Page extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setMaphilight();
        }, 1);
    }

    setMaphilight() {
        $(document).ready(function() {
            $(function() {
                window.$('img[usemap]').maphilight();
                window.$('img[usemap]').rwdImageMaps();
            })
        });
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

    colorPicker(data, fstColor, sndColor) {
        try {
            return data.RomInformasjon === "Solgt!" ? sndColor : fstColor;
        } catch(e) {
           
        }
        return fstColor;
    }

    render() {

        const {fstColor, sndColor, data, side, bgImage} = this.props;

        return(
            <div className={"leilighetsvelger" + side + "-container"}>
                <img id={"leiligheter" + side} useMap={"#map-" + side} src={bgImage} alt="" style={{width: "100%"}} />
                <map id={"map-" + side} name={"map-" + side} >
                
                    {
                        data.map((item, i) => {
                            let colorChoose = fstColor;

                            try{
                                colorChoose = item.RomInformasjon.Status === "Solgt!" ? sndColor : fstColor
                            } catch(e){}

                            return <area id={item.id} key={i} alt="" onClick={(e) => this.goTo(e, item.goTo)} shape="poly" data-maphilight={colorChoose} coords={item.coords} />
                        })
                    }
                
                </map>
            </div>
        )
    }
}

export default Page;