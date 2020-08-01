 let buttons = document.querySelectorAll('.btn');
 let screen = document.querySelector('.screen');
 let equal = document.querySelector('.btn-equal');
 let clear = document.querySelector('.btn-clear');

  

 buttons.forEach(button=>{
   button.addEventListener('click', function(event){
    let btnValue = event.target.dataset.num;
    screen.value += btnValue;
  
   })
 });

 equal.addEventListener('click', function(e){
  if(screen.value === ''){
    screen.value = 'Please Enter a Value';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
})


clear.addEventListener('click', function(){
  screen.value = ''
});

//  function add(a,b){
//    return a+b;
//  };

// function substact(a,b){
//   return a-b;
// };

// function multply(a, b){
//   return a *b;
// };

// function divide(a,b){
//   return a/b;
// };

// function operate(operator, num1, num2){
//   return operator(num1,num2);
// };

