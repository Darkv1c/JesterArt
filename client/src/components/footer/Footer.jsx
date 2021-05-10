import React from 'react'
import './Style.css'
import {Logo} from '../../assets/icons'

const Footer = () => {
    return (
        <>
            <div className="FooterSpace"/>
            <div className="Footer">
                <div className="LogoContainer">
                    <img className="Logo" alt="Logo" src={Logo}/>
                </div>
                <span className="InfoContainer">
                    <h4>Información</h4>
                    <ul>
                        <li>Sobre nosotros</li>
                        <li>Copyright</li>
                        <li>Preguntas y respuestas</li>
                    </ul>
                </span>
            </div>
        </>
    )
}

export default Footer
