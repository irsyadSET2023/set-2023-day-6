console.log("Hello World");

var name = "irsyad";
let firstName = "ahmad";
const birthYear = "1998";

let parentContainer = document.querySelector("#parentContainer");
let rightNav = document.querySelector("#rightNav");
let errorModal = document.querySelector("#errorModal");

parentContainer.setAttribute("class", "parent-class");

function changeBlue() {
  parentContainer.setAttribute("class", "parent-class-blue");
}

function changeRed() {
  parentContainer.setAttribute("class", "parent-class-red");
}

function openNav() {
  rightNav.setAttribute("style", "right:0");
}

function closeNav() {
  rightNav.setAttribute("style", "right:");
}

function closeModal() {
  errorModal.setAttribute("style", "display:none");
}

function openModal(param) {
  if (param == "info") {
    // document.querySelector("h2").textContent = "Info";
    document.querySelector("#errorAlert").textContent = "Info";
    errorModal.setAttribute("style", "displays:block;background-color: blue;");
  } else if (param == "warning") {
    document.querySelector("#errorAlert").textContent = "Warning";
    errorModal.setAttribute(
      "style",
      "displays:block;background-color: yellow;"
    );
  } else if (param == "danger") {
    document.querySelector("#errorAlert").textContent = "Danger";
    errorModal.setAttribute("style", "displays:block;background-color: red");
  }
}
