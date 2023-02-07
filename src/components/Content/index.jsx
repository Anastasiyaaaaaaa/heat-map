import React, { useEffect, useState } from 'react'
import './style.css'
import img from '../../img/cover.jpg'
import { useDispatch } from 'react-redux'
import { pushPoint } from '../../redux/pointsSlice'

export const Content = () => {

    const [start, setStart] = useState({})
    
    useEffect(() => {
        const img = document.querySelector('.content img')
        const imgPos = img.getBoundingClientRect() 
        setStart({
            x: imgPos.x,
            y: imgPos.y
        })

    },[setStart])
    
    const dispatch = useDispatch()

    const handleClick = (event) => { 
        /** сохраняем координаты относительно изображения */
        dispatch(pushPoint({
            x: event.pageX - start.x,
            y: event.pageY - start.y
        }))
    }

    return <div className='content'>
        <img draggable='false' onClick={handleClick} src={img} alt='Tiburon vc.ru' />
    </div>
}