const swiperHero = new Swiper(".hero-swiper", {
  // Optional parameters
  loop: false,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".hero-swiper-btn-next",
    prevEl: ".hero-swiper-btn-prev",
  },

  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});

const swiperReviews = new Swiper(".reviews-swiper", {
  // Optional parameters
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1.4,

  breakpoints: {
    620: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero-swiper-btn-next",
    prevEl: ".hero-swiper-btn-prev",
  },
});

const swiperblocks = new Swiper(".blocks-wrap-mobile-swiper", {
  // Optional parameters
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1.5,

  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
});

const swiperOther = new Swiper(".swiper-other", {
  // Optional parameters
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1.5,
});
