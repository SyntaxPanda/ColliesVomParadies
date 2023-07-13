import React, {useState} from 'react';
import "../css/WelpenPage.css"
import HeaderHomeSeite from "../image/HeaderHomeSeite.jpeg";
import Modal from "react-modal";

export default function WelpenPage() {
    const[open2023, setOpen2023] = useState(false)

    function openModal2023(){
        setOpen2023(true)
    }
    function closeModal2023(){
        setOpen2023(false)
    }

    return (
        <div className={"welpenPage"}>

            <div className={"menuList"}>
            </div>

            <div className={"welpenPageBox"}>
                <div>
                    <img className={"imageHeaderHomePage"} src={HeaderHomeSeite} alt="Collies vom Paradies"/>
                </div>

                <div>
                    <button onClick={openModal2023}>2023</button>
                <Modal isOpen={open2023}>

                    <button onClick={closeModal2023}>Zurück</button>
                </Modal>
                </div>

                <div>
                    <button onClick={openModal2021}>2021</button>
                    <Modal isOpen={open2021}>

                        <button onClick={closeModal2021}>Zurück</button>
                    </Modal>
                </div>
                <div>2020</div>
                <div>2019</div>
                <div>2018</div>
                <div>2017</div>
                <div>2016</div>
                <div>2015</div>
                <div>2014</div>
                <div>2012</div>
                <div>2011</div>
                <div>2010</div>
                <div>2009</div>
                <div>2008</div>
                <div>2007</div>
                <div>2006</div>
            </div>
        </div>
    );
}