import React from 'react';
import './Style.css';

const SectionA = () => {
    const link=[
        "https://st.depositphotos.com/1999493/3845/i/600/depositphotos_38458611-stock-photo-jester-mask.jpg",
        "https://i.pinimg.com/originals/a2/94/1f/a2941fadc18631d5ebc52211fa353f26.jpg"
    ]


    return (
        <div className="SectionA">
            <div style={{backgroundImage: `url(${link[0]})`}} className="InfoContainer">
                <div className="text">
                    <h1>BIENVENIDO A JESTER ART</h1>
                    <p>Nos gusta jugar, divertirnos, expresarnos, y ese es el objetivo de nuestra web,
                        pues ¿que mejor forma hay de expresarse que el arte?, cuenta a todos lo que sientes,
                        lo que piensas, o encuentra una obra con la que te identifiques y apoya a su creador. 
                    </p>
                </div>
                <div className="img" style={{backgroundImage: `url(${link[0]})`}} />
            </div>  
            <div className="gradient"/>    
        </div>
    )
}

export default SectionA
