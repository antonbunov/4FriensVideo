var swiper = new Swiper(".digital-detail__slider", {
    loop: false,
    init: false,
    pagination: {
      el: '.digital-detail__pagination-mobile',
      type: "bullets",
      clickable: true,
  },


    navigation: {
      nextEl: ".digital-detail__button-next",
      prevEl: ".digital-detail__button-prev",
    },
    slidesPerView: 2.25,
    spaceBetween: 80,
    breakpoints: {

      769: {
        slidesPerView: 2.25,
        spaceBetween: 60,
        // pagination: {
        //   el: ".digital-detail__pagination",
        //   // type: "fraction",
    
        //   type: 'custom',
        //   renderCustom: function (swiper, current, total) {
        //       return '<span class="digital-detail__pagination-num">'+'0'+current +'</span>' + '<hr/>' + '<span class="digital-detail__pagination-num">'+'0'+total +'</span>';
              
        //   },
        // }, 
      },
      320: {
        slidesPerView: 1.25,
        spaceBetween: 10,
   pagination: {
      el: '.digital-detail__pagination-mobile',
      type: "bullets",
      clickable: true,
  },
      },
    }

    // centeredSlides: true,

  });


  swiper.on("slideChange afterInit slidesLengthChange", function () {
		let currentSlide = this.activeIndex + 1;
		document.querySelector('.digital-detail__pagination').innerHTML = `
    <span class="digital-detail__pagination-num">0${currentSlide}</span><hr/>
<span class="digital-detail__pagination-num"> 0${this.slides.length}</span>`;

});

swiper.init();

