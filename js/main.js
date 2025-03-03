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

// Получаем все контейнеры с кнопками
const exerciseModeContainers = document.querySelectorAll(".exercise-mode-btns");

// Добавляем обработчик клика для каждого контейнера
exerciseModeContainers.forEach((container) => {
  container.addEventListener("click", function (e) {
    // Находим элемент, по которому кликнули
    const clickedElement = e.target.closest(
      ".exercise-mode-link-voice, .exercise-mode-link-keyboard"
    );

    if (clickedElement) {
      // Удаляем активный класс со всех элементов в контейнере
      container
        .querySelectorAll(
          ".exercise-mode-link-voice, .exercise-mode-link-keyboard"
        )
        .forEach((element) => element.classList.remove("active"));

      // Добавляем активный класс кликнутому элементу
      clickedElement.classList.add("active");
    }
  });
});

const exerciseDificultContainers = document.querySelectorAll(
  ".exercise-difficulty"
);

// Добавляем обработчик клика для каждого контейнера
exerciseDificultContainers.forEach((container) => {
  container.addEventListener("click", function (e) {
    // Находим элемент с текстом внутри контейнера
    const textSpan = this.querySelector(".exercise-difficulty-text span");

    const CircleSpan = this.querySelector(".exercise-difficulty-row");

    // Меняем текст в зависимости от текущего состояния
    if (this.classList.contains("active")) {
      textSpan.textContent = "Легко";
    } else {
      textSpan.textContent = "Сложно";
    }

    // Добавляем/удаляем активный класс
    this.classList.toggle("active");
    CircleSpan.classList.toggle("active");
  });
});
