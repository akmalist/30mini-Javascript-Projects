const myButton = document.querySelector("#btn");
const hecksVal = document.querySelector("#hex-value");
const mainBody = document.querySelector("body")

myButton.addEventListener("click", changeColor);

function changeColor(){

    const a = Math.floor(Math.random() * Math.floor(9));
    const b = Math.floor(Math.random() * Math.floor(9));
    const c = Math.floor(Math.random() * Math.floor(9));
    const d = Math.floor(Math.random() * Math.floor(9));
    const e = Math.floor(Math.random() * Math.floor(9));
    const f = Math.floor(Math.random() * Math.floor(9));

const myArray = [a,b,c,d,e,f];

const newArr = [];
for( let i = 0; i<myArray.length; i++){
  newArr.push(myArray[i].toString())

}
const final = newArr.join('');

const mega = "#" + final;

mainBody.style.setProperty("background-color", mega);
hecksVal.innerHTML = mega;
}


