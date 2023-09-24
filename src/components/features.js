import React from "react";
import Feature from "./feature";
import online from './images/icon-online.png'
import budget from './images/icon-budgeting.png'
import onboarding from './images/icon-onboarding.png'
import api from './images/icon-api.png'


export default function features(){
    return(
        <div className="features">
            <h1>Why choose Easybank?</h1>
            <p> We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="d-flex flex-row flex-wrap">                       
            <Feature image={online} title=" Online Banking" desc="  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."/>
            <Feature image={budget} title="Simple Budgeting" desc="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."/>
            <Feature image={onboarding} title="Fast Onboarding" desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."/>
            <Feature image={api} title="Open API" desc="  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."/>
            </div>

        </div>
    )
}