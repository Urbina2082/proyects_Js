const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "back-space") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";

      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const theme_toggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculaitor");


let isdark = true;

theme_toggle.onclick = () => {
  calculator.classList.toggle("dark");
  theme_toggle, classList.toggle("active");
  isdark = !isdark;
};
