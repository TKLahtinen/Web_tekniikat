let nappi = document.querySelector("button");
let tausta = document.querySelector("body");

nappi.addEventListener("click", changeBc);

function changeBc(){
    tausta.classList.toggle("bC")
}