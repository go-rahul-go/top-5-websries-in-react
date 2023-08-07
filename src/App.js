import React from "react";
import Amazon from "./Amazon";
import "./style.css"
import Netflix from "./Netflix";
import Heading from "./Heading";





function App(props) {
    if(props.type==="amazon")
    {
        return(
            <>
            <Heading type="amazon"/>
            <div className="container">
            <Amazon/>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <Heading type="netflix"/>
            <div className="container">
            <Netflix/>
            </div>
            </>
        )
    }
    

}

export default App;

