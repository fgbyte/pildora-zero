const btnAcorModal = document.querySelectorAll('.acor-modal');
const acorModalItem = document.querySelectorAll('.acor-modal-item');
const modalLeft = document.querySelector('#modal-left');
const modalRight = document.querySelector('#modal-right');
const closeModal = document.querySelectorAll('.close-modal')


modalLeft.classList.add('hidden')
modalRight.classList.add('hidden')

btnAcorModal.forEach((element, index) => {

  btnAcorModal[index].addEventListener('click', () => {

    if (window.innerWidth < 976) {
      acorModalItem.forEach((e) => { e.classList.remove('expand-acordion') })//Esta linea es opcional, es para q solo se vea un acordeon a la vez, ademas siempre se vera almenos uno.
      acorModalItem[index].classList.toggle('expand-acordion');
    }
    if (window.innerWidth > 976) {
      if (index >= 7) {
        modalLeft.classList.toggle('hidden')
        modalRight.classList.add('hidden')
      }
      else if (index < 7) {
        modalRight.classList.toggle('hidden')
        modalLeft.classList.add('hidden')
      }
    }
  })
});

closeModal.forEach((el, i) => {
  closeModal[i].addEventListener('click', () => {
    modalLeft.classList.add('hidden')
    modalRight.classList.add('hidden')
  })
})





const carousels = document.querySelectorAll(".carousel-container");
const controlsList = document.querySelectorAll(".guias");

carousels.forEach((carousel, carouselIndex) => {
  const controls = controlsList[carouselIndex];
  const controlItems = controls.querySelectorAll("div[data-index]");

  setActiveControl(0);

  function setActiveControl(index) {
    controlItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("bg-guias");
      } else {
        item.classList.remove("bg-guias");
      }
    });
  }

  controlItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      muveItems(index)
    });
  });


  const guiasExterna = document.querySelectorAll('.acor-modal');

  let indexFinal = 0
  guiasExterna.forEach((el, i) => {
    guiasExterna[i].addEventListener('click', () => {
      if (i > 6) {
        indexFinal = i - 7

      }
      else {
        indexFinal = i
      }
      muveItems(indexFinal)

    })

  })

  const muveItems = (index) => {
    const cardWidth = carousel.querySelector(".snap-start").offsetWidth;
    carousel.scroll({ left: cardWidth * index, behavior: "smooth" });
  }


  carousel.addEventListener("scroll", () => {
    const cardWidth = carousel.querySelector(".snap-start").offsetWidth;
    const scrollPos = carousel.scrollLeft;
    const activeControlIndex = Math.floor(scrollPos / cardWidth);
    setActiveControl(activeControlIndex);
  });
});






