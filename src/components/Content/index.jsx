import React, { useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { pushPoint, setContent } from '../../redux/heatmapSlice'
import { NavLink } from 'react-router-dom'

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

    return <>
        <div className='content' onClick={handleClick}></div>
        <NavLink className='page-link' to='/heat-map'>Далее</NavLink>
    </>
}