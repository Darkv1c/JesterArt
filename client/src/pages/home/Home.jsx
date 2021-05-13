import React from 'react'
import './Style.css'
import {SectionA, SectionB} from './sections'

const Home = () => {
    return (
        <>
            <img className="a" src="https://blog.hostalia.com/wp-content/uploads/2013/02/geometrio-gif-blog-de-hostalia-hosting.gif" alt="" />   
            <div className="Home">  
                <SectionA/>  
                <SectionB/>
            </div>
        </>
    )
}

export default Home
