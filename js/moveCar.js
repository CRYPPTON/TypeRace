var c = document.getElementById("canvas_");
var ctx = c.getContext("2d");

$("#car").hide()        // hide element 

c.height =  100;
c.width =  900;

var p = 0;                        // position
var d = (900 / (text.length))*3.2;      // displacement

console.log(d)
function moveCar(){                   // if delete and char is true car move ****issue
    p += d;
    ctx.clearRect(0, 0, c.width, c.height);
    drawCar(p/3.5)
}

function drawCar(d){
    drawLine()
    ctx.beginPath();
    var img = document.getElementById("car");
    ctx.drawImage(img, d, 30);
    ctx.stroke();
    
}

function drawLine(){
    ctx.beginPath();
    ctx.lineWidth = "8";
    ctx.font = "10px Arial";
    ctx.fillText("START", 30, 10);
    ctx.fillText("FINISH", 800, 10);
    ctx.strokeStyle = "black";
    ctx.moveTo(70, 0);
    ctx.lineTo(70, 150);
    ctx.moveTo(850, 0);
    ctx.lineTo(850, 150);
    ctx.stroke();
}

drawCar(0)
