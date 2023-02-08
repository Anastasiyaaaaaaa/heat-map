import React, { useEffect } from 'react'
import './style.css' 
import { useDispatch } from 'react-redux'
import { pushPoint, setContent } from '../../redux/heatmapSlice'

export const Content = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const content = document.querySelector('.content')
        const contentRect = content.getBoundingClientRect()

        dispatch(setContent({
            height: contentRect.height,
            width: contentRect.width,
            x: contentRect.x,
            y: contentRect.y
        }))
    }, [])


    const handleClick = (event) => {
        dispatch(pushPoint({
            x: event.pageX,
            y: event.pageY
        }))
    }

    return <div className='content' onClick={handleClick}>
    </div>
}