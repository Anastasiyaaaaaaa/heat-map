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
        clicks: [],
        hashmap: {}
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        pushPoint: (state, action) => {
            const x = action.payload.x - state.content.x
            const y = action.payload.y - state.content.y

            state.clicks.push({
                x: x,
                y: y,
            })

            const key = getHashKey(x, y)

            if (!(key in state.hashmap)) {
                state.hashmap[key] = {
                    points: []
                }
            }

            state.hashmap[key].points.push({
                x: x,
                y: y
            })
        }
    }
})

export const { setContent, pushPoint } = heatmapSlice.actions

export default heatmapSlice.reducer