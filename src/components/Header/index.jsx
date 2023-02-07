import React from 'react'
import { 
    Link
} from 'react-router-dom'
import './style.css'

export const Header = () => {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/heat-map'>HeatMap</Link>
                </li>
            </ul>
        </nav>
    </header>
}