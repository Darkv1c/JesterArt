import React from 'react'
import './Style.css'

const LogIn = () => {
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
        </div>
    )
}

export default LogIn
