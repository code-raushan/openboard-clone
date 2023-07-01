const canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext('2d');
tool.strokeStyle = "red";
tool.lineWidth = "3"

let mousedown = false

// move to -> line to 

canvas.addEventListener('mousedown', (e)=>{
    mousedown = true;
    tool.beginPath();
    tool.moveTo(e.clientX, e.clientY);
});
canvas.addEventListener('mousemove', (e)=>{
    if(mousedown){
        tool.lineTo(e.clientX, e.clientY);
        tool.stroke();
    }
    
});
canvas.addEventListener('mouseup', ()=>{
    mousedown = false;
})