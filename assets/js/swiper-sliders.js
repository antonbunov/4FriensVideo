var swiper = new Swiper(".digital-detail__slider", {
    loop: true,
     pagination: {
      el: ".digital-detail__pagination",
      // type: "fraction",

      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return '<span class="digital-detail__pagination-num">'+'0'+current +'</span>' + '<hr/>' + '<span class="digital-detail__pagination-num">'+'0'+total +'</span>' + '<div><span class="' + className + '">' + (index + 1) + '</span></div>';
          
      },

      // el: ".digital-detail__pagination-mobile",
      // clickable: true,


      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
    },  


      navigation: {
        nextEl: ".digital-detail__button-next",
        prevEl: ".digital-detail__button-prev",
      },
    slidesPerView: 2.25,
    spaceBetween: 80,
    breakpoints: {

      768: {
        slidesPerView: 1.25,
        spaceBetween: 60,
      },
      320: {
        pagination:{
          el: ".digital-detail__pagination-mobile",
          clickable: true,
        },
        slidesPerView: 1.25,
        spaceBetween: 10,
      },
    }

    // centeredSlides: true,

  });