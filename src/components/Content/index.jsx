import React, { useEffect } from 'react'
import './style.css'
import img from '../../img/cover.jpg'
import { useDispatch } from 'react-redux'
import { pushPoint, setContent } from '../../redux/heatmapSlice'

export const Content = () => {

    const dispatch = useDispatch()

    useEffect(() => { 
        const img = document.querySelector('.content img')
        const imgRect = img.getBoundingClientRect()
        dispatch(setContent({
            height: imgRect.height,
            width: imgRect.width,
            x: imgRect.x,
            y: imgRect.y
        })) 
    }, [])


    const handleClick = (event) => {
        dispatch(pushPoint({
            x: event.pageX,
            y: event.pageY
        }))
    }

    return <div className='content'>
        <img draggable='false' onClick={handleClick} src={img} alt='Tiburon vc.ru' />
    </div>
}