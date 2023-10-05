const antcType = document.querySelectorAll('.antc-type')
const controls = document.querySelectorAll('.controls')


antcType.forEach((e, i) => {
    antcType[i].classList.add('hidden')
})
antcType[0].classList.remove('hidden')
controls[0].classList.add('border-purple')



controls.forEach((el, index) => {
    controls[index].addEventListener('click', () => {

        antcType.forEach((e, i) => {
            antcType[i].classList.add('hidden')
            controls[i].classList.remove('border-purple')
        })
        antcType[index].classList.remove('hidden')
        controls[index].classList.add('border-purple')
    })
});


