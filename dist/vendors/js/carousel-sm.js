const carousels1 = document.querySelectorAll(".carousel-container1");
const controlsList1 = document.querySelectorAll(".guias1");

carousels1.forEach((carousel, carouselIndex) => {
    const controls = controlsList1[carouselIndex];
    const controlItems = controls.querySelectorAll("#controls");

    console.log(controlItems)

    setActiveControl(0);

    function setActiveControl(index) {
        controlItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add("bg-guias-sm");
            } else {
                item.classList.remove("bg-guias-sm");
            }
        });
    }

    controlItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            muveItems(index)
        });
    });

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
