//----------------swiper-----------------

var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    },
  });

  //------------page jump------------

  function jump(){
    var index = document.getElementById('index');
    window.location.hash = 'index';

  }