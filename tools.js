const optionContainer = document.querySelector(".options-container");
const toolsContainer = document.querySelector(".tools-container");
let pencil = document.querySelector('img[alt="pencil"]');
let pencilTool = document.querySelector(".pencil-tool");
let eraser = document.querySelector('img[alt="eraser"]');
let eraserTool = document.querySelector(".eraser-tool");
let optionFlag = true;
function openTools() {
  let iconElem = optionContainer.children[0];
  iconElem.classList.remove("fa-bars");
  iconElem.classList.add("fa-times");
  toolsContainer.style.display = "flex";
}
function closeTools() {
  let iconElem = optionContainer.children[0];
  iconElem.classList.remove("fa-times");
  iconElem.classList.add("fa-bars");
  toolsContainer.style.display = "none";
  eraserTool.classList.add("eraser-display-none");
  pencilTool.classList.add("display-none");
}
optionContainer.addEventListener("click", () => {
  optionFlag = !optionFlag;
  if (optionFlag) {
    openTools();
  } else {
    closeTools();
  }
});
pencil.addEventListener("click", () => {
  pencilTool.classList.toggle("display-none");
});
eraser.addEventListener("click", () => {
  eraserTool.classList.toggle("eraser-display-none");
});
