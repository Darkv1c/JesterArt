import React, {useState} from 'react';
import './Style.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const SectionA = () => {
    const link=[
        "https://i.pinimg.com/originals/81/61/f9/8161f9cb1c16e4ce0e27f62ff06e60a1.jpg",
        "https://pbs.twimg.com/media/ECSjCsIXYAAj2Ku.jpg"
    ]
    
    const [page, setPage] = useState(0)

    const infoArray = [
        <div style={{backgroundImage: `url(${link[0]})`}} className="InfoContainer">
            <div className="text">
                <h1>BIENVENIDO A JESTER ART</h1>
                <p>Nos gusta jugar, divertirnos, expresarnos, y ese es el objetivo de nuestra web,
                    pues ¿que mejor forma hay de expresarse que el arte?, cuenta a todos lo que sientes,
                    lo que piensas, o encuentra una obra con la que te identifiques y apoya a su creador. 
                </p>
            </div>
            <div className="img" style={{backgroundImage: `url(${link[0]})`}} />
        </div>,
         <div style={{backgroundImage: `url(${link[1]})`}} className="InfoContainer">
         <div className="text">
             <h1>BIENVENIDO A JESTER ART</h1>
             <p>Nos gusta jugar, divertirnos, expresarnos, y ese es el objetivo de nuestra web,
                 pues ¿que mejor forma hay de expresarse que el arte?, cuenta a todos lo que sientes,
                 lo que piensas, o encuentra una obra con la que te identifiques y apoya a su creador. 
             </p>
         </div>
         <div className="img" style={{backgroundImage: `url(${link[1]})`}} />
     </div>
    ]

    const changePage = () => {
        if (page<infoArray.length-1){
            return setPage(page+1);
        }
        setPage(0);
    }
    setTimeout(changePage, 20000)


    return (
        <div className="SectionA">
            <TransitionGroup style={{display: "flex", maxWidth: "100%"}}>
                <CSSTransition key={page} classNames="slide" timeout={1600}>
                    {infoArray[page]}
                </CSSTransition>
            </TransitionGroup>        
        </div>
    )
}

export default SectionA
