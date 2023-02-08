import { createSlice } from '@reduxjs/toolkit'

export const heatmapSlice = createSlice({
    name: 'heatmap',
    initialState: {
        content: {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        },
        clicks: []
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        pushPoint: (state, action) => {
            state.clicks.push({
                x: action.payload.x - state.content.x,
                y: action.payload.y - state.content.y,
            })
        }
    }
})

export const { setContent, pushPoint } = heatmapSlice.actions

export default heatmapSlice.reducer