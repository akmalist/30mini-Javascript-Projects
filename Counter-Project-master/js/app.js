 const lowerBtn = document.querySelector("#lower");
 const upperBtn = document.querySelector("#upper");
 const counterMain = document.querySelector("#counter");


 upperBtn.addEventListener("click", increaseNum);
 lowerBtn.addEventListener("click", decreaseNum);
 let count = 0;

 function increaseNum() {
   count++;

   counterMain.textContent = count;
   if (count > 0) {
     counterMain.style.setProperty("color", "green")
   }
 }

 function decreaseNum() {
   count--;
   counterMain.textContent = count;
   if (count < 0) {
     counterMain.style.setProperty("color", "red");
   }

 }