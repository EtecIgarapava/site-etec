const swiper = new Swiper('.swiper', {
    // Geral
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
    },

    // Paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Botões de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});