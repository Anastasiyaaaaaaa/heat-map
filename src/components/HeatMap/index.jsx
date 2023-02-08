import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { drawHeatMap } from './utils' 

export const HeatMap = () => {
     
    const state = useSelector(state => state.heatmap)

    useEffect(() => { 
        drawHeatMap(state.clicks) 
    })
 
    return <div className='heat-map'>  
        <canvas id='canvas' width={state.content.width} height={state.content.height}></canvas>
    </div>
}