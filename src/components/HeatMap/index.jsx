import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { drawHeatMap } from './utils'

export const HeatMap = () => {
    
    const coordinats = useSelector(state => state.points.coordinats)

    useEffect(() => {
        drawHeatMap(coordinats)
    })
 
    return <div className='heat-map'>
        <canvas id='canvas' width='1000px' height='500px'></canvas>
    </div>
}