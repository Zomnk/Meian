var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    // effect: 'coverflow',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
});