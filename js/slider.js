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
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
      }
    }
  ]
  });
});