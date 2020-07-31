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
})();


//MODAL SECTION

(function(){
  const storeItems = document.querySelectorAll('.store-item');
  const lightBoxContainer = document.querySelector('.lightbox-container');
  const lightboxItem = document.querySelector('.lightbox-item');
  const allImages = document.querySelectorAll('.store-img');
  
  
  const listOfImages = [];
  let counter = 0;
  
  allImages.forEach(image =>{
    listOfImages.push(image.src);
  });
  
  storeItems.forEach(item => {
   item.addEventListener('click', function(event){
     console.log(event.target.src);
     let singleImage = event.target.src;
  
     lightboxItem.style.backgroundImage = `url(${singleImage})`
     lightBoxContainer.classList.add('show');
     counter = listOfImages.indexOf(singleImage);
      console.log(counter)
   });
  });

  const leftBtn = document.querySelector('.btnLeft');
 

  leftBtn.addEventListener('click', function(){
    counter--;
    if(counter<0){
      counter = listOfImages.length  - 1;
    }
    lightboxItem.style.backgroundImage = `url(${listOfImages[counter]})`
  });

  const rightBtn = document.querySelector('.btnRight');
  rightBtn.addEventListener('click', function(){
    counter++;
    if(counter >= listOfImages.length){
      counter = 0;
    }
    lightboxItem.style.backgroundImage  = `url(${listOfImages[counter]})`
  });

  const ligthBoxClose = document.querySelector('.lightbox-close');
  ligthBoxClose.addEventListener('click', function(){
    lightBoxContainer.classList.remove('show');
  })
  
})();

 

 