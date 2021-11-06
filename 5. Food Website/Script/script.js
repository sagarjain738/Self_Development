document.getElementById('search-icon').onclick = () => {
    document.getElementById('forms').classList.toggle('active');
}

document.getElementById('close').onclick = () => {
    document.getElementById('forms').classList.remove('active');
}


var swiper = new Swiper(".slideshow", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
});