import { step, palette } from "../../constants";

export const drawHeatMap = (hashmap, maxClicks) => {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    if (maxClicks > 0) {

        for (let hash in hashmap) {
            const points = hashmap[hash].points // массив точек
            const k = points.length / maxClicks //коэффициент кликов относительно максимального значения
            let pointsColor // цвет точек из одной области кликов

            for (let color in palette) {
                const interval = palette[color]
                if (k > interval[0] && k <= interval[1]) {
                    pointsColor = color
                }
            }

            points.forEach(point => drawDot(point, pointsColor))
        }

    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawDot(dot, color) {
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, step / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}