import React, { useState } from 'react'
import './Style.css'
import {Logo, Menu, Close} from '../../assets/icons'
import { useHistory } from 'react-router';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const push = useHistory().push
    const root = document.documentElement.style;

    const handleClick = () => {
        setClick(!click);
        click ? root.setProperty("overflow", "hidden") : root.setProperty("overflow", "unset")
    }


    return (
        <>
            <div className="Container">            
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
