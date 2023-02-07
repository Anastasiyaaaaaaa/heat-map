export const drawHeatMap = (coordinats) => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    coordinats.forEach(point => drawDot(point));
    ctx.stroke();

    function drawDot(dot) {
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI, false);
        // ctx.fillStyle = dot.color;
        ctx.fill();
    }
}