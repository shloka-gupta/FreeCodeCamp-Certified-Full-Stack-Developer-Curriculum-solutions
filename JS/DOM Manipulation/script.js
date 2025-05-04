
let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener("click", function () {
    button.classList.toggle("filled");
    
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;"; // filled heart
    } else {
      button.innerHTML = "&#9825;"; // empty heart
    }
  });
}