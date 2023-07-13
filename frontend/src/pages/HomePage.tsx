import React from 'react';
import "../css/HomePageCC.css"
import HeaderHomeSeite from "../image/HeaderHomeSeite.jpeg"
import BlumenSommer from "../image/Blumesommer2020HomeSeite.gif"
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div className={"homePage"}>
            <div className={"menuList"}>

            </div>

            <div className={"page"}>
                <div>
                    <img className={"imageHeaderHomePage"} src={HeaderHomeSeite} alt="Collies vom Paradies"/>
                </div>
                <div className={"lastUpdateHomePageBox"}>
                    Letztes Update: 15.05.2023
                </div>
                <div className={"infoHomePage"}>
                    ACHTUNG: NEUE MAIL-ADRESSE !!!
                </div>
                <div className={"breakHomePage"}>
                    ================================
                </div>
                <div className={"emailHomePage"}>
                    collies-vom-paradies@web.de
                </div>
                <div className={"überschriftHomePage"}>
                    Familienbezogene kleine VDH- Liebhaberzucht
                    seit 40 Jahren
                </div>
                <div className={"abgrenzungHomePage"}>
                    <img src={BlumenSommer} alt="BlumenSommer"/>
                </div>
                <div className={"marlieUndRiekonBoxHomePage"}>
                    <div className={"textMarlieUndRiekonHomePage"}>
                        Wir freuen uns über sieben wundervolle
                        und gesunde Welpen von "Marlie" und "Riekon".
                    </div>
                    <div className={"imageMarlieUndRiekonHomePage"}>
                    </div>
                </div>
                <div>
                    <div className={"abgrenzung2HomePage"}>
                        <img src={BlumenSommer} alt="BlumenSommer"/>
                    </div>
                </div>
                <div className={"welpenLinkHomePage"}>
                    <div>
                        Mehr Welpenfotos unter
                    </div>
                    <Link to={"/welpen"}>"Welpen"</Link>
                </div>
                <div>
                    <div className={"abgrenzung3HomePage"}>
                        <img src={BlumenSommer} alt="BlumenSommer"/>
                    </div>
                </div>
            </div>
        </div>
    );
}