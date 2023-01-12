const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const array_of_colors = ['rgb(200, 0, 0)', 'blue', 'green', 'red'];


function draw(yi = 0) {
    ctx.fillStyle = "#e7ebee";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 

    ctx.beginPath();
  
    for (let i = 0; i < canvas.width; i++) {
        // for (let i = 0; i < 300; i++) {
 
        yi++

      
        ctx.lineTo(i, canvas.height / 2 - Math.sin(yi * (Math.PI / 180)) * 3)

    }
    ctx.lineTo(1370,-60)
    ctx.lineTo(0,-60)

    ctx.closePath();
 
    ctx.fillStyle = 'rgb(27, 8, 51)';

    ctx.fill();

}

let yi = 0;
let direction = true;
function wave(intier,cont=true){
  
    if(yi=== 1020) {
        
        clearInterval(intier)
        direction=!direction
       
    }
    if(yi === 800 && cont){
        clearInterval(intier);
            // console.log("here here",yi)
            let intir = setInterval(() => {
   
                wave(intir)
            },30)
        
    }
    if(yi === 1000 && cont){
        clearInterval(intier);
            // console.log("here here 2",yi)
            let intisr = setInterval(() => {
   
                wave(intisr,false)
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
console.log({yi,direction})
    draw(yi)
}

let intier = setInterval(() => {
   
    wave(intier)
}, 20)

 