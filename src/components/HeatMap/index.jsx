import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { drawHeatMap } from './utils'
import './style.css'
import { NavLink } from 'react-router-dom'
import { cleanHeatMap } from '../../redux/heatmapSlice'

export const HeatMap = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.heatmap)

    useEffect(() => { 
        drawHeatMap(state.hashmap, state.maxClicks)
    },[state])

    const handleClick = () => {
        dispatch(cleanHeatMap()) 
    }

    return <>
        <div className='heat-map'>
            <canvas id='canvas' width={state.content.width} height={state.content.height}></canvas>
        </div>
        <NavLink className='page-link' to='/'>Назад</NavLink>
        <button className='btn_clean' type='button' onClick={handleClick}>Очистить</button>
    </>
}