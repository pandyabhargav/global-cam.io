const swiper = new Swiper('.swiper-container-2', {
    loop: true, // Makes the slider loop infinitely
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 10, // Adjust space between slides if needed
    navigation: {
      nextEl: '.swiper-button-next', // Optional, if you want next/prev buttons
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination', // Optional, if you want pagination
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Delay in milliseconds before moving to the next slide
      disableOnInteraction: false, // Keep autoplay running after user interaction
    },
  });


//   blog slider js