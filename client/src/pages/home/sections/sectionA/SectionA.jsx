import React from 'react';
import './Style.css';

const SectionA = () => {
    const links="https://i.pinimg.com/originals/81/61/f9/8161f9cb1c16e4ce0e27f62ff06e60a1.jpg"
    let options = {
        root: document.querySelector('.sectionA'),
        rootMargin: '0px',
        threshold: 1.0
      }
      
    let observer = new IntersectionObserver(callback, options);
    function callback() { console.log("ya no soy visible")}

    var target = document.querySelector(".img")
    return (
        <div className="SectionA">
            <div style={{backgroundImage: `url(${links})`}} className="InfoContainer">
                <div className="text">
                    <h1>BIENVENIDO A JESTER ART</h1>
                    <p>Nos gusta jugar, divertirnos, expresarnos, y ese es el objetivo de nuestra web,
                        pues ¿que mejor forma hay de expresarse que el arte?, cuenta a todos lo que sientes,
                        lo que piensas, o encuentra una obra con la que te identifiques y apoya a su creador. 
                    </p>
                </div>
                <div className="img" style={{backgroundImage: `url(${links})`}} >
                </div>
            </div>
        </div>
    )
}

export default SectionA
