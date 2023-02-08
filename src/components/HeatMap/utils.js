import { step } from "../../constants";

export const drawHeatMap = (hashmap) => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    for (let key in hashmap) {
        hashmap[key].points.forEach(point => drawDot(point))
    }

    // ctx.stroke();

    function drawDot(dot) {
        ctx.fillStyle = 'red';
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, step / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}