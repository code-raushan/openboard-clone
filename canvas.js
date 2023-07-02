const canvas = document.querySelector("canvas");
const pencilColorsElem = document.querySelectorAll(".pencil-color");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d");
let pencilColor = "blue";

tool.lineWidth = "3";

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

function strokeBegin(strokeObj) {
  tool.beginPath();
  tool.strokeStyle = pencilColor;
  tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
  tool.lineTo(strokeObj.x, strokeObj.y);
  tool.stroke();
}
