import React from "react";


export default function feature(props){
    return(
        <div className="feature">
            <img src={props.image}/>
           <h3>{props.title}</h3>
           <p>{props.desc}</p>
        </div>
    )
}