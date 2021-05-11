import React, {useState} from 'react'
import './Style.css'
import {ArrowBack, ArrowForward} from '../../assets/icons'

const Carousel = ({width="100%", height, showArrows=true, children, Key, borderRadius="0px"}) => {
    const [current, setCurrent] = useState(0)

    const back = () => {
        if (current !== 0){
            setCurrent(current-1)
            return "#element"+Key+"a"+(current-1)
        }
        return window.location.href;
    }
    const forward = () => {
        if (current+1 < children.length){
            setCurrent(current+1)
            return "#element"+Key+"a"+(current+1)
        }
        return window.location.href;
    }
    return (
        <div className="CarouselContainer" style={{width, borderRadius}}>          
            {showArrows && <img style={{borderRadius}} onClick={()=>window.location=back()}
            className="Arrows ArrowBack" src={ArrowBack} />}
            {showArrows && <img style={{borderRadius}} onClick={()=>window.location=forward()} className="Arrows ArrowForward" src={ArrowForward} />}
            <div className="Carousel">
                {children.map((e, i)=> ({
                    ...e, props: {
                        ...e.props,
                        id: "element"+Key+"a"+i,
                        style:  {borderRadius}                        
                        }}))}
            </div>        
        </div>  
    )
}

export default Carousel
