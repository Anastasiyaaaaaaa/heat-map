import React from 'react'
import { 
    NavLink 
} from 'react-router-dom'
import './style.css'

export const Header = () => {
    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={'nav-link-selected'} to='/home'>Home</NavLink >
                </li>
                <li>
                    <NavLink activeClassName={'nav-link-selected'} to='/heat-map'>HeatMap</NavLink >
                </li>
            </ul>
        </nav>
    </header>
}