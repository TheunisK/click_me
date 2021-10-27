const bodyEl = document.querySelector("body");

const buttonEl = document.createElement("button");
bodyEl.append(buttonEl);

function updateBodyStyle() {
    bodyEl.style.backgroundColor = "antiqueWhite";
    bodyEl.style.display = "grid";
    bodyEl.style.placeItems = "center";
}


function updateButtonColour(colour) {
    buttonEl.style.backgroundColor = colour;
}

function updateButtonStyle() {
    buttonEl.style.height = "100px";
    buttonEl.style.width = "100px";
    buttonEl.style.borderRadius = "10px";
    buttonEl.innerText = "Click Me";
    buttonEl.style.color = "red";
    buttonEl.style.fontSize = "2rem";
}

function updateButton(colour) {
  updateButtonColour(colour);
  updateButtonStyle();
}

function getRandomColour() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonUpdateStyle() {
    updateButton(getRandomColour());
    updateBodyStyle();
}

buttonUpdateStyle();

buttonEl.addEventListener("click", buttonUpdateStyle);