const elm = document.getElementsByClassName("line");
const cntr = document.getElementById("container");
let isOpen = false;
function handlerClick() {
  isOpen = !isOpen;
  isOpen ? addClass() : removeClass();
  
}

function addClass() {
  setTimeout(() => {
    cntr.classList.add("active");
  }, 500);
  for (let i = 0; i < elm.length; i++) {
    elm[i].classList.add("active");
  }
}

function removeClass() {
  setTimeout(() => {
    cntr.classList.remove("active");
  }, 500);
  for (let i = 0; i < elm.length; i++) {
    elm[i].classList.remove("active");
  }
}
