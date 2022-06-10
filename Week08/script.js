let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); 
let context2 = canvas.getContext("2d"); 


let deltaX = 0;
let deltaY = 0;
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
 
let keys = [];
 
function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;
 
    // left
    if (keys[37]) {
      deltaX -= 8;
    }
 
    // right
    if (keys[39]) {
      deltaX += 8;
    }
 
    // down
    if (keys[38]) {
      deltaY -= 8;
    }
 
    // up
    if (keys[40]) {
      deltaY += 8;
    }
 
    e.preventDefault();
 
    drawTriangle();
}
 
function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}       
function drawTriangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // the triangle
    context.beginPath();
    context.moveTo(200 + deltaX, 100 + deltaY);
    context.lineTo(170 + deltaX, 150 + deltaY);
    context.lineTo(230 + deltaX, 150 + deltaY);
    
    context.closePath();
    
    // the outline
    context.lineWidth = 10;
    context.strokeStyle = "rgba(102, 102, 102, 1)";
    context.stroke();
   
    // the fill color
    context.fillStyle = "rgba(255, 204, 0, 1)";
    context.fill();
  }

 
  window.onload = drawTriangle();