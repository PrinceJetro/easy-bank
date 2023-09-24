import React from "react";
import Article from "./article";
import logo from "./images/logo.png"
import facebook from './images/icon-facebook.png'
import youtube from './images/icon-youtube.png'
import twitter from './images/icon-twitter.png'
import pinterest from './images/icon-pinterest.png'
import instagram from './images/icon-instagram.png'



export default function footer(){
    return(
        <footer className="row">
            <div className="col-sm-4 first">
                <img src={logo} className="logo"/> 
                <div className="mb-5">
                <a href="" className="socials"><img src={facebook}/></a>
                <a href="" className="socials"><img src={youtube}/></a>
                <a href="" className="socials"><img src={twitter}/></a>
                <a href="" className="socials"><img src={pinterest}/></a>
                <a href="" className="socials"><img src={instagram}/></a>
                </div>
            </div>
            <div className="col-sm-2 second">
                <p><a href="">About us</a></p>
                <p><a href="">Contact</a></p>
                <p><a href="">Blog</a></p>
            </div>
            <div className="col-sm-2 third">
            <p><a href="">Careers</a></p>
            <p><a href="">Support</a></p>
            <p><a href="">Privacy Policy</a></p>
            </div>
            <div  className="col-sm-4 fourth">
            <button className="btn ">Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
            </div>

        </footer>
        )
}