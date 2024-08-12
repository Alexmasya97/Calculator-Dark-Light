let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.textContent == "=") {
      value.textContent = eval(value.textContent);
    } else {
      if (this.textContent == "Clear") {
        value.textContent = "";
      } else {
        value.textContent += this.textContent;
      }
    }
  });
}

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
