import { step } from "../constants"

export const getHash = (x, y) => {
    return `${Math.floor(x / step) * step}x${Math.floor(y / step) * step}`
}