import React from "react";


export default function feature(props){
    return(
        <div className="article">
            <img src={props.image}/>
           <div className="p-3">
           <p className="author">By {props.author}</p>
           <h3>{props.head}</h3>
           <p className="text">{props.text}</p>
           </div>
        </div>
    )
}