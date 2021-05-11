import React from 'react'
import './Style.css'
import {Carousel} from "../../components"

const Home = () => {
    return (
        <div className="Home">
            <Carousel Key={0}>
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
            </Carousel>
            <br/>
            <Carousel Key={1} showArrows={true}>
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
                <img src="https://imagen.nextn.es/wp-content/uploads/2020/11/2011-23-Touhou-Spell-Bubble-Portada.jpg?strip=all&lossy=1&ssl=1" alt="img1" />
            </Carousel>
        </div>
    )
}

export default Home
