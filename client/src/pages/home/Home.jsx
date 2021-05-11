import React from 'react'
import './Style.css'
import {Carousel} from "../../components"

const Home = () => {
    return (
        <div className="Home">
            <Carousel Key={0} height="calc(9/16*100%)">
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://somoskudasai.com/wp-content/uploads/2020/05/portada_touhou-2-1-1024x576.jpg" alt="img1" />
                <img src="https://steamuserimages-a.akamaihd.net/ugc/829076951163275833/B761E481C48C5A96C90E7F1D309CB20F167DD3E7/" alt="img1" />
            </Carousel>
            <Carousel Key={1} borderRadius="27px" showArrows={false}>
                <h4>VIDEO-GAMES</h4>
                <h4>GOTH</h4>
                <h4>SYNTH-POP</h4>
                <h4>ANIME</h4>
                <h4>VAPORWAVE</h4>
            </Carousel>
            <Carousel borderRadius="27px" Key={2}>
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://somoskudasai.com/wp-content/uploads/2020/05/portada_touhou-2-1-1024x576.jpg" alt="img1" />
                <img src="https://steamuserimages-a.akamaihd.net/ugc/829076951163275833/B761E481C48C5A96C90E7F1D309CB20F167DD3E7/" alt="img1" />
            </Carousel>
        </div>
    )
}

export default Home
