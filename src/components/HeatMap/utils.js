import { step } from "../../constants";

export const drawHeatMap = (clicks) => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    clicks.forEach(point => drawDot(point));
    // ctx.stroke();

    function drawDot(dot) {
        ctx.fillStyle = 'red';
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, step / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}