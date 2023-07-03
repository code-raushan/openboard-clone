const canvas = document.querySelector("canvas");
const pencilColorsElem = document.querySelectorAll(".pencil-color");
const pencilColorsWidth = document.querySelector(".pencilwidth");
const downloadBtn = document.querySelector("img[alt='download']");
const eraserBtn = document.querySelector("img[alt='eraser']");
const eraserWidth = document.querySelector(".eraserwidth")
let eraserFlag = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d");

tool.lineWidth = "3";

let pencilColor = "blue";
const eraserColor = "white";

let mousedown = false;

// move to -> line to


eraserBtn.addEventListener("click", ()=>{
  eraserFlag = !eraserFlag;
})
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
  tool.strokeStyle = eraserFlag? eraserColor: pencilColor;
  tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
  tool.lineTo(strokeObj.x, strokeObj.y);
  tool.stroke();
}
pencilColorsWidth.addEventListener("change", ()=>{
  tool.lineWidth = pencilColorsWidth.value;
})
eraserWidth.addEventListener("change", ()=>{
  tool.lineWidth = eraserWidth.value;
})

pencilColorsElem.forEach((colorElem) => {
  colorElem.addEventListener("click", () => {
    pencilColor = colorElem.classList[0];
  });
});