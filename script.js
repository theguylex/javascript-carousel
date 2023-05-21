const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const offset = button.dataset.carouselButton
    })
})