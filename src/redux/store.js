import { configureStore } from '@reduxjs/toolkit'
import pointsReducer from './heatmapSlice'

export default configureStore({
    reducer: {
        heatmap: pointsReducer
    }
})