const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function clearCanvas(){
    ctx.fillStyle = "#00bcd4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function draw(yi = 0) {
    
    clearCanvas();

    ctx.beginPath();
  
    for (let i = 0; i < canvas.width; i++) {
        yi++
        ctx.lineTo(i, canvas.height / 2 - Math.sin(yi * (Math.PI / 180)) * 7)

    }
    ctx.lineTo(1520,-60)
    ctx.lineTo(0,-60)

    ctx.closePath();
 
    ctx.fillStyle = '#eafdff';

    ctx.fill();

}

let yi = 0;
function wave(setIntervalData,cont=true){
  
    if(yi=== 1500) {
        clearInterval(setIntervalData)  
    }

    yi = yi + 5
 
    draw(yi)
}

let setIntervalData = setInterval(() => {
   
    wave(setIntervalData)
}, 20)

 