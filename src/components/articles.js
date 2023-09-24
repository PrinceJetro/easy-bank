import React from "react";
import Article from "./article";
import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'

export default function articles(){
    return(
        <div className="articles">
            <h1>Latest Articles</h1>
            <div className="d-flex flex-row flex-wrap">                       
            <Article image={currency} author="Claire Robinson" head="Receive money in any currency with no fees" text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"/>
            <Article image={restaurant} author="Wilson Hutton" head=" Treat yourself without worrying about money" text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"/>
            <Article image={plane} author="Wilson Hutton" head="  Take your Easybank card wherever you go" text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"/>
            <Article image={confetti} author="Claire Robinson" head="Our invite-only Beta accounts are now live!" text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."/>
            </div>

        </div>
    )
}