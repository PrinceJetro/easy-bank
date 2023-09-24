import React from "react";
import  mobile from './images/image-mockups.png'


export default function intro(){
    return(
        <div className="intro row d-flex flex-column-reverse flex-sm-row">
            <div className="col-sm-6 intro_left">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="btn ">Request Invite</button>
            </div>
            <div className="intro_right col-sm-6 ">
                <img src={mobile} width={700} height={700} className="mopup"/>

            </div>
        </div>
    )
}