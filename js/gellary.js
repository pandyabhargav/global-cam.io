const swiper2 = new Swiper('.swiper-container-3', {
    loop: true, // Enables infinite looping of the slides
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 10, // Space between slides
    navigation: {
      nextEl: '.swiper-button-next', // Optional, next button
      prevEl: '.swiper-button-prev', // Optional, previous button
    },
    pagination: {
      el: '.swiper-pagination', // Optional, pagination
      clickable: true, // Enable clicking for pagination
    },
    autoplay: {
      delay: 3000, // Delay in milliseconds before moving to the next slide
      disableOnInteraction: false, // Keep autoplay running after user interaction
    },
  });

//   gallery slider