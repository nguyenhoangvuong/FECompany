const swiper1 = new Swiper(".slider-1",{
    autoplay:{
        delay:1500,
        disableOnInteraction: false,
    },
    loop:true,
    navigation:{
        nextEl:".swiper-next",
        prevEl:".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    }
})