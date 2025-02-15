const swiper1 = new Swiper('.swiper-container-1', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  autoplay: {
    delay: 3000, // Delay between transitions in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});


//   terminal swiper