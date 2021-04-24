$(function() {

  let width = $(window).width();

  if (width <= 1080){
  $('.hero-list').slick({
    dots:false,
    slidesToShow: 1,
    autoplay: false, 
    prevArrow: '<img class="btn-img-prev hero-btn" src="../image/slide-btn-recruit-hero.svg" style="none">',
    nextArrow: '<img class="btn-img-next hero-btn" src="../image/slide-btn-recruit-hero.svg">',
    infinite: false,
  });
} else {
  $('.hero-list').slick('unslick');
}


})