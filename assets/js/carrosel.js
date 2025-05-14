const swiper = new Swiper('.swiper', {
    // Geral
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: true,
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