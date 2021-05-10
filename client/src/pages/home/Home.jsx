import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import './Style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const C = () => {    
  return  <Carousel autoPlay width="90%" showArrows={true} showThumbs={false}>
        <div>
            <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_TouhouSpellBubble_image1600w.jpg"/>
        </div>
        <div>
            <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_TouhouSpellBubble_image1600w.jpg"/>
        </div>
    </Carousel>
}
const Home = () => {
    return (
        <div className="Home">
                <C/>
        </div>
    )
}

export default Home
