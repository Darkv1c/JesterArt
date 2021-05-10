import React from 'react'
import {Navbar, Footer} from './components'
import {Home} from './pages'

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App
