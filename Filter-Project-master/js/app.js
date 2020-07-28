//filter on click function

(function(){
    const allButtons = document.querySelectorAll('.btn');
    const items = document.querySelectorAll('.store-item');    
    allButtons.forEach( button => {
       button.addEventListener('click', function(ev){
        ev.preventDefault();
        const filter = ev.target.dataset.filter;
        items.forEach(item => {
            if(filter ==='all'){
                 item.style.display = 'block'
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
            
            }
        })
    
       })
    })

})();

//search function 
(function(){
    const userInput = document.querySelector('#search-item');
    const items = document.querySelectorAll('.store-item');

    userInput.addEventListener('keyup', function(ev){
       const searchfilter = ev.target.value.toLowerCase().trim();
      items.forEach((item) =>{
                if(item.textContent.includes(searchfilter)){
                  item.style.display = 'block'
              }else{
                  item.style.display = 'none';
              }
      })
    })
})()

 