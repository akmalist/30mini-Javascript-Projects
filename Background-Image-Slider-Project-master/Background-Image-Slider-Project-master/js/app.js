  (function () {

    const pictures = [
      "contBcg-0",
      "contBcg-1",
      "contBcg-2",
      "contBcg-3",
      "contBcg-4"
    ];

    picnum = 0;
    const buttons = document.querySelectorAll(".btn");
    const images = document.querySelector('#image');
    const finalImage =
      buttons.forEach(
        button => button.addEventListener('click', function () {
            if (button.classList.contains('btn-left')) {
              picnum--;
              //reset the numbers
              if (picnum < 0) {
                picnum = pictures.length - 1;
              }
              images.style.setProperty("background", `url('./img/${pictures[picnum]}.jpeg ')`);
            } else if (button.classList.contains('btn-right')) {
              picnum++;

              //reset the numbers
              if (picnum > pictures.length - 1) {
                picnum = 0;
              }
              images.style.setProperty("background", `url('./img/${pictures[picnum]}.jpeg ')`);
            }



          }

        )
      )
  })()