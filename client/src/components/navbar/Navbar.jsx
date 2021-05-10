import React from 'react'
import './Style.css'
import {Logo, Menu} from '../../assets/icons'

const Navbar = () => {
    return (
        <div className="Container">
            <img className="Menu" alt="menu" src={Menu} /> 
            <h3>JESTER-ART</h3>
            <img className="Logo" alt= "logo" src={Logo} />
        </div>
    )
}

export default Navbar
