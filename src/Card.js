import React from "react";

import "./style.css";


function Card(props)
{
    return(
        <div className="card">
            <div className="image-card">
                <img src={props.imagelink} alt=""/>
            </div>
            <div className="details">
                <p className="brand">{props.brand}</p>
                <p className="title">{props.title}</p>
                <a href={props.link} target="_blank" rel="noreferrer">Learn More</a>
            </div>
        </div>
    )
}

export default Card;