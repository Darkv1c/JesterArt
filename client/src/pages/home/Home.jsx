import React from 'react'
import './Style.css'
import {SectionA, SectionB} from './sections'
import Particles from './sections/particles/Particles'

const Home = () => {
    return ( 
        <div className="Home">  
            <SectionA/>  
            <SectionB/>
            <Particles/>
        </div>
    )
}

export default Home
