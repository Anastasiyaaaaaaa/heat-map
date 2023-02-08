import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { drawHeatMap } from './utils' 

export const HeatMap = () => {
    
    // const state = useSelector(state => state.heatmap)
    const clicks = useSelector(state => state.heatmap.clicks)

    useEffect(() => {
        // console.log(state)
        drawHeatMap(clicks) 
    })
 
    return <div className='heat-map'>  
        <canvas id='canvas' width='1000px' height='500px'></canvas>
    </div>
}