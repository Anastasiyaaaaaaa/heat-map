export const drawHeatMap = (clicks) => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    clicks.forEach(point => drawDot(point));
    // ctx.stroke();

    function drawDot(dot) {
        ctx.fillStyle = 'red';
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 10, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}