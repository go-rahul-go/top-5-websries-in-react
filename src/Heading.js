
import React from "react";

function Heading(props){
    if(props.type==="amazon")
    {
        return <h1>Top 5 Amazon Prime Shows</h1>
    }
   else{
    return <h1>Top 5 Netflix Shows</h1>
   }
}


export default Heading;