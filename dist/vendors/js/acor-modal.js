
const btnAcorModal = document.querySelectorAll('.acor-modal');
const acorModalItem = document.querySelectorAll('.acor-modal-item');


btnAcorModal.forEach((element , index) => {
    if (window.innerWidth < 976) {
        btnAcorModal[index].addEventListener('click', () => { 
                acorModalItem[index].classList.toggle('expand-acordion');
         })
    }
});



