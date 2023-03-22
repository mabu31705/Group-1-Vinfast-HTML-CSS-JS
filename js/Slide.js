const swiper1 = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});