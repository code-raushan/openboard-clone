const canvas = document.querySelector("canvas");
const pencilColorsElem = document.querySelectorAll(".pencil-color");
const pencilColorsWidth = document.querySelector(".pencilwidth");
const downloadBtn = document.querySelector("img[alt='download']");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d");

tool.lineWidth

let pencilColor = "blue";


let mousedown = false;

// move to -> line to

pencilColorsElem.forEach((colorElem) => {
  colorElem.addEventListener("click", () => {
    pencilColor = colorElem.classList[0];
  });
});

canvas.addEventListener("mousedown", (e) => {
  mousedown = true;
  strokeBegin({
    x: e.clientX,
    y: e.clientY,
  });
});
canvas.addEventListener("mousemove", (e) => {
  if (mousedown) {
    drawStroke({
        x: e.clientX,
        y: e.clientY
    })
  }
});
canvas.addEventListener("mouseup", () => {
  mousedown = false;
});

downloadBtn.addEventListener("click", ()=>{
  const url = canvas.toDataURL();

  const a = document.createElement("a");
  a.href = url;
  a.download = "board.jpg"
  a.click();
})


function strokeBegin(strokeObj) {
  tool.beginPath();
  tool.strokeStyle = pencilColor;
  tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
  tool.lineTo(strokeObj.x, strokeObj.y);
  tool.stroke();
}
pencilColorsWidth.addEventListener("change", ()=>{
  tool.lineWidth = pencilColorsWidth.value;
})

