import React, {useEffect} from 'react'
import {Navbar} from './components'
import {Home} from './pages'
import {Route, Switch, useLocation} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.css'

const App = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") window.location.href="/home"
    }, [location.pathname])

    return (
        <div className="App">
            <Navbar/>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="pageSlide" timeout={1000}>
                    <Switch location={location}>
                        <Route exact path="/home"><Home/></Route>  
                        <Route exact path="/log-in"><div style={{minWidth: "100vw", minHeight: "100vh", backgroundColor: "black"}}/></Route>  
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default App
