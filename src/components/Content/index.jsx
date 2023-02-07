import React from 'react'
import './style.css'
import img from '../../img/cover.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { pushPoint } from '../../redux/pointsSlice'

export const Content = () => {

    // const points = useSelector(state => state.points)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        // console.log('X.value = ', event.pageX)
        // console.log('Y.value = ', event.pageY)
        dispatch(pushPoint({
            x: event.pageX,
            y: event.pageY
        }))
        // console.log(points)
    }

    return <div className='content'>
        <img onClick={handleClick} src={img} alt='Tiburon vc.ru' />
    </div>
}