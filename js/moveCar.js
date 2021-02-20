var c = document.getElementById("canvas_");
var ctx = c.getContext("2d");
var p = 0;                        // position
var d = 900 / (text.length);      // displacement

console.log(d)
function moveCar(){
    console.log("Pomeranje"+d)
    p += d;
    console.log("Put"+p)
    ctx.clearRect(0, 0, c.width, c.height);
    drawCar(p/3.5)
}

function drawCar(d){
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.rect(d, 50, 20, 30);
    ctx.stroke();
}


drawCar(0)
