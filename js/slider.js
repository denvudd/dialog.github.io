$(document).ready(function () {
  $('.partners-slider').slick({
    responsive: [{
        breakpoint: 2000,
        settings: 'unslick',
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      }
    ]
  });
});