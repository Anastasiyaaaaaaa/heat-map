import { step } from "../constants"

export const getHashKey = (x, y) => {
    return `${Math.floor(x / step) * step}x${Math.floor(y / step) * step}`
}