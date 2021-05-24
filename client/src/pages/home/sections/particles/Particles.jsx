import React, { useState } from 'react'
import './Styles.css'

function Particles() {

    const [x, setX] = useState(Math.random()*100)
    const [y, setY] = useState(Math.random()*100)

    setInterval(() => {
        setX(Math.random()*100);
        setY(Math.random()*100)
    }, 500)

    return (
        <>
            <div className="particlesContainer">
                <div className="oneParticle">
                    < span className="particle"/>
                </div>      
            </div>
            <div className="particlesContainer2">
                <div className="oneParticle">
                    < span className="particle"/>
                </div>      
            </div>
            <div className="particlesContainer3">
                <div className="oneParticle">
                    < span className="particle"/>
                </div>      
            </div>
            <div className="particlesContainer4">
                <div className="oneParticle">
                    < span className="particle"/>
                </div>      
            </div>
        </>
    )
}

export default Particles
