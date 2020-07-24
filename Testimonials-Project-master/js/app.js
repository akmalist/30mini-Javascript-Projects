 (function () {

     const customerName = document.querySelector("#customer-name");
     const customerText = document.querySelector("#customer-text");
     const customerImage = document.querySelector("#customer-img")
     const buttons = document.querySelectorAll(".btn");

     const allUsers = [];

     let countUser = 0;

     //create user Constructor

     function User(number, name, info) {
         this.number = number;
         this.name = name;
         this.info = info;
     }


     function createCustomer(imgNum, name, info) {
         const fullImage = `img/customer-${imgNum}.jpg`
         const newUser = new User(fullImage, name, info);
         allUsers.push(newUser);
     };


     createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
     createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
     createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
     createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
     createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')



     console.log(allUsers)



     buttons.forEach(button =>
         button.addEventListener('click', function (e) {
             if (button.classList.contains('prevBtn')) {
                 if (countUser < 0) {

                    countUser = allUsers.length - 1;
                 }
                 countUser--;
                 customerName.textContent = allUsers[countUser].name;
                 customerText.textContent = allUsers[countUser].info;
                 customerImage.src = allUsers[countUser].number;
             }
             if (button.classList.contains('nextBtn')) {
                 countUser++;
                 if (countUser > allUsers.length - 1) {
                     countUser = 0;
                 }

                 customerName.textContent = allUsers[countUser].name;
                 customerText.textContent = allUsers[countUser].info;
                 customerImage.src = allUsers[countUser].number;
             }


         })
     )


 })();