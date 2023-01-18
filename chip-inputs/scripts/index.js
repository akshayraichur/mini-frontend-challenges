const inputText = document.querySelector(".input-text");
const chipTemplate = document.querySelector("#chip-template");
const chipContainer = document.querySelector(".chips-container");

function addChipToDOM(text) {
  const chipElmTemplate = chipTemplate.content.cloneNode(true);
  const chipElm = document.createElement("div");
  chipElm.classList.add("chip-container");
  chipElm.appendChild(chipElmTemplate);
  const textElm = chipElm.querySelector("p");
  textElm.textContent = text;

  chipContainer.appendChild(chipElm);
}

function deleteChip(event) {
  const parentElement = event.parentNode;

  parentElement.remove();
}

inputText.addEventListener("keyup", (e) => {
  let input = e.target.value.trim();
  if (!input) {
    return;
  }
  if (e.keyCode === 13 && input) {
    addChipToDOM(input);
    e.target.value = "";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    deleteChip(e.target);
  }
});
