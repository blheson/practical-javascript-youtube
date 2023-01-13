const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");


function draw(yi = 0) {
    ctx.fillStyle = "#00bcd4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 

    ctx.beginPath();
  
    for (let i = 0; i < canvas.width; i++) {
        yi++
        ctx.lineTo(i, canvas.height / 2 - Math.sin(yi * (Math.PI / 180)) * 7)

    }
    ctx.lineTo(1505,-60)
    ctx.lineTo(0,-60)

    ctx.closePath();
 
    ctx.fillStyle = '#eafdff';

    ctx.fill();

}

let yi = 0;
let direction = true;
function wave(setIntervalData,cont=true){
  
    if(yi=== 1020) {
        
        clearInterval(setIntervalData)
        direction=!direction
       
    }
    if(yi === 800 && cont){
        clearInterval(setIntervalData);
            // console.log("here here",yi)
            let intir = setInterval(() => {
   
                wave(intir)
            },30)
        
    }
    if(yi === 1000 && cont){
        clearInterval(setIntervalData);
            // console.log("here here 2",yi)
            let setIntInner = setInterval(() => {
   
                wave(setIntInner,false)
            }, 80)
        
    }
    if (direction && yi > 60000) {
        direction = !direction
       
        
        
    } else if ( !direction && yi > 3000) {
        yi=0
    } else if (yi < 3010){
        yi = yi + 10
        direction=false
       
    }
    if(  yi < 20 ){
        direction=true
    }
 
    draw(yi)
}

let setIntervalData = setInterval(() => {
   
    wave(setIntervalData)
}, 20)

 