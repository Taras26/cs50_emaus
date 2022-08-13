'use strict';


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    margin: 10,
    autoWidth: true,
    mouseDrag: false,
    autoplay: true,
    rewind: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 400,
    nav: false,
    preload: true,
  });

  $("a").on('click', function (event) {
    console.log(this.hash)
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      console.log(hash)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  $('li.bar').on('click', function () {
    const menu = $('.selector-top');

    if (menu.css('display') == 'block') {
      menu.css('display', 'none');
    } else {
      menu.css('display', 'block');
    }
  });
  $(document).on('click', function (e) {
    if (!e.target.closest('.menu')) {
      const menu = $('.menu-list');
      menu.css('display', 'none');
    }
  });
});