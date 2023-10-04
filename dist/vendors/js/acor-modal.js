
const btnAcorModal = document.querySelectorAll('.acor-modal');
const acorModalItem = document.querySelectorAll('.acor-modal-item');


btnAcorModal.forEach((element , index) => {
    if (window.innerWidth < 976) {
        btnAcorModal[index].addEventListener('click', () => { 
            if(acorModalItem[index].classList.contains('expand-acordion')){
                acorModalItem[index].classList.remove('expand-acordion');
                acorModalItem[index].classList.add('contract-acordion');
            }
            else{
                acorModalItem[index].classList.remove('contract-acordion');
                acorModalItem[index].classList.add('expand-acordion');
            }
         })
    }
});



