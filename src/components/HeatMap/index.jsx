import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { drawHeatMap } from './utils' 
import './style.css'

export const HeatMap = () => {
     
    const state = useSelector(state => state.heatmap)

    useEffect(() => { 
        //   console.log(state)
        drawHeatMap(state.hashmap, state.maxClicks) 
    })
 
    return <div className='heat-map'>  
        <canvas id='canvas' width={state.content.width} height={state.content.height}></canvas>
    </div>
}