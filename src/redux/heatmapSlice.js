import { createSlice } from '@reduxjs/toolkit'
import { getHashKey } from './utils'

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

            const key = getHashKey(x, y)

            if (!(key in state.hashmap)) {
                state.hashmap[key] = {
                    points: []
                }
            }

            // console.log(key, x, y)

            state.hashmap[key].points.push({
                x: x,
                y: y
            })

            if (state.hashmap[key].points.length > state.maxClicks) {
                state.maxClicks++
            }
        }
    }
})

export const { setContent, pushPoint } = heatmapSlice.actions

export default heatmapSlice.reducer