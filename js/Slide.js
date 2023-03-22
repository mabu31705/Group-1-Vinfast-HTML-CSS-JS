const swiper1 = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});