import React from 'react'
import './Style.css'

const LogIn = () => {
    return (
        <div className="LogIn">
            <img id="LoginImg" src="http://static.zerochan.net/Rolling.Girl.full.1079511.jpg" alt="Login" />
            <div className="formContainer">
                <form>
                    <h2>INGRESAR</h2>
                    <h4>Correo/Usuario</h4>
                    <input />
                    <h4>Contraseña</h4>
                    <input />
                    <br/>
                    <br/>
                    <input className='Button'  type = "submit" value="ENTRAR"/>
                </form>
            </div>
        </div>
    )
}

export default LogIn
