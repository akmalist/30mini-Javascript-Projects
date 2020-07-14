const myButton = document.querySelector("button");
const mainBody = document.querySelector("body")


myButton.addEventListener("click", changeColor);
 
function changeColor(){
    const a = Math.floor(Math.random() * Math.floor(255));
    const b = Math.floor(Math.random() * Math.floor(255));
    const c = Math.floor(Math.random() * Math.floor(255));
    mainBody.style.setProperty("background-color", "rgb(" + a + "," + b +"," + c +")")
};

