$(document).ready(function () {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    // You can adjust this value based on when you want the background color change to occur
    var scrollThreshold = 50;

    if (scroll >= scrollThreshold) {
      $('.mynavbar').css('background-color', '#000000');
      $('.mynavbar').css('box-shadow', 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;');
    } else {
      $('.mynavbar').css('background-color', 'transparent');
    }
  });
  // swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  var swiper2 = new Swiper(".gallery-slideshow", {
    spaceBetween: 10, autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
    },
  });
  // aos initialization
  AOS.init();
  // wow intialization
  new WOW().init();
});