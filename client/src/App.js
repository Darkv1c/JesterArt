import React, {useEffect} from 'react'
import {Navbar} from './components'
import {Home} from './pages'
import {Route, Switch, useLocation} from 'react-router-dom'

const App = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") window.location.href="/home"
    }, [location.pathname])
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/home"><Home/></Route>  
            </Switch>
        </div>
    )
}

export default App
