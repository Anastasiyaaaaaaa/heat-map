import { createSlice } from '@reduxjs/toolkit'

export const pointsSlice = createSlice({
    name: 'points',
    initialState: {
        coordinats: []
    },
    reducers: {
        pushPoint: (state, action) => {
            state.coordinats.push(action.payload)
        }
    }
})

export const { pushPoint } = pointsSlice.actions

export default pointsSlice.reducer