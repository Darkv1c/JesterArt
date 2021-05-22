import React, { useState } from 'react'
import './Style.css'
import {Logo, Menu, Close} from '../../assets/icons'
import { useHistory, useLocation } from 'react-router';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const push = useHistory().push
    const location = useLocation()
    const root = document.documentElement.style;
    const noNavbarPage = ["/log-in"];

    const handleClick = () => {
        setClick(!click);
        click ? root.setProperty("overflow", "hidden") : root.setProperty("overflow", "unset")
    }


    return (
        <>
            <div className={`Container ${noNavbarPage.includes(location.pathname)? "hideNavbar" : "showNavbar"}`}>            
                <img onClick={() => push("/home")} className="Logo" alt= "logo" src={Logo} />
                <h3 onClick={() => push("/home")}>JESTER-ART</h3>
                <img onClick={handleClick} className="Menu" alt="menu" src={click? Close : Menu} />
                <ul onClick={handleClick} className={`Options ${click ? "ShowOptions" : "HideOptions" }`}>
                    <li onClick={() => push("/home")}>Home</li>
                    <li>Productos</li>
                    <li>Sobre nosotros</li>
                    <li onClick={() => push("/log-in")}>Ingresar</li>
                </ul>
            </div> 
        </>
    )
}

export default Navbar
