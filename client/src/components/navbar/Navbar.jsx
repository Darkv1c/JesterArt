import React, { useState } from 'react'
import './Style.css'
import {Logo, Menu, Close} from '../../assets/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click);
    }


    return (
        <>
            <div className="Container">            
                <Link to="/home"><img className="Logo" alt= "logo" src={Logo} /></Link>
                <Link to="/home"><h3>JESTER-ART</h3></Link>
                <img onClick={handleClick} className="Menu" alt="menu" src={click? Close : Menu} />
                <ul onClick={handleClick} className={`Options ${click ? "ShowOptions" : "HideOptions" }`}>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Sobre nosotros</li>
                    <li>Ingresar</li>
                </ul>
            </div> 
        </>
    )
}

export default Navbar
