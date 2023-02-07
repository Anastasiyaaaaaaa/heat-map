import './App.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { HeatMap } from './components/HeatMap'
import { Content } from './components/Content'

export const App = () => {
    return  <div className='app'>
        <Router>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/heat-map'>HeatMap</Link>
            </header>

            <Switch>
                <Route path='/heat-map'>
                    <HeatMap />
                </Route>
                <Route path='/'>
                    <Content />
                </Route>
            </Switch>

        </Router>
    </div> 
}