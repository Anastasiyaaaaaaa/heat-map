import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { drawHeatMap } from './utils'
import './style.css'
import { NavLink } from 'react-router-dom'

export const HeatMap = () => {

    const state = useSelector(state => state.heatmap)

    useEffect(() => {
        //   console.log(state)
        drawHeatMap(state.hashmap, state.maxClicks)
    })

    return <>
        <div className='heat-map'>
            <canvas id='canvas' width={state.content.width} height={state.content.height}></canvas>
        </div>
        <NavLink className='page-link' to='/home'>Назад</NavLink>
    </>
}