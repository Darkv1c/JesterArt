import React from 'react'
import './Style.css'
import {ArrowBack} from '../../assets/icons'
import { useHistory } from 'react-router'

const LogIn = () => {

    const history = useHistory()

    return (
        <div className="LogIn">
            <img id="LoginImg" src="https://i.pinimg.com/564x/ca/ec/50/caec506f48c025c55aa2700277994a60.jpg" alt="Login" />
            <div className="formContainer">
                <form>
                    <h2>INGRESAR</h2>
                    <h4>Correo/Usuario</h4>
                    <input />
                    <h4>Contraseña</h4>
                    <input type="password"/>
                    <br/>
                    <br/>
                    <input className='Button'  type = "submit" value="ENTRAR"/>
                </form>
            </div>
            <img onClick={() => history.goBack()} className="ArrowBack" src={ArrowBack}/> 
        </div>
    )
}

export default LogIn
