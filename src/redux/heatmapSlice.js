import { createSlice } from '@reduxjs/toolkit'
import { getHash } from './utils'

export const heatmapSlice = createSlice({
    name: 'heatmap',
    initialState: {
        content: {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        },
        hashmap: {},
        maxClicks: 0
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        pushPoint: (state, action) => {
            const x = action.payload.x - state.content.x
            const y = action.payload.y - state.content.y

            const hash = getHash(x, y)

            /* устанавливаем начальное значение, если появился новый хеш */
            if (!(hash in state.hashmap)) {
                state.hashmap[hash] = {
                    points: []
                }
            }

            /* добавляем новую точку */
            state.hashmap[hash].points.push({
                x: x,
                y: y
            })

            /* обновляем максимум, если размер массива точек больше максимума */
            if (state.hashmap[hash].points.length > state.maxClicks) {
                state.maxClicks++
            }
        }
    }
})

export const { setContent, pushPoint } = heatmapSlice.actions

export default heatmapSlice.reducer