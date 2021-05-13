import React, {useState} from 'react'
import './Style.css'
import {ArrowBack, ArrowForward} from '../../assets/icons'

const Carousel = ({width="100%", height, showArrows=true, children, Key, borderRadius="0px", touchAction}) => {
    const [current, setCurrent] = useState(0)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(false);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }
    
    function handleTouchEnd(e) {  
        let move = touchStart - touchEnd;
        if (touchEnd===false) return; 
        setTouchEnd(false);
        setTouchStart(0);
        if (move > 50) {
            return forward();
        }
        
        if (move < -50) {
            return back();
        }
        window.location="#element"+Key+"a"+(current);
        e.target.style.touchAction="unset";
    }

    const back = () => {
        if (current !== 0){
            setCurrent(current-1)
            window.location="#element"+Key+"a"+(current-1)
        }
        window.location=window.location.href;
    }
    const forward = () => {
        if (current+1 < children.length){
            setCurrent(current+1)
            window.location="#element"+Key+"a"+(current+1)
        }
        window.location=window.location.href;
    }
    return (
        <div className="CarouselContainer" style={{width, borderRadius}}>          
            {showArrows && <img style={{borderRadius}} onClick={back}
            className="Arrows ArrowBack" src={ArrowBack} />}
            {showArrows && <img style={{borderRadius}} onClick={forward} className="Arrows ArrowForward" src={ArrowForward} />}
            <div onTouchStart={e => handleTouchStart(e)} 
                onTouchMove={e => handleTouchMove(e)} 
                onTouchEnd={(e) => handleTouchEnd(e)} 
                style={{touchAction}}
                className="Carousel">
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
