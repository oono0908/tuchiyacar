$(function(){
  
  $('.slide-list').slick({
    dots: true,
    dotsClass: 'slide-slick-dots__inner',
    speed: 300,
    slidesToShow: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
    prevArrow: '<div class="side-btn side-btn-left"></div>',
    nextArrow: '<div class="side-btn side-btn-right"></div>'
  });

const shopListItem = [
  {wrapper: ".shop-img-wrapper1", list:".shop-list__item1"},
  {wrapper: ".shop-img-wrapper2", list:".shop-list__item2"},
  {wrapper: ".shop-img-wrapper3", list:".shop-list__item3"},
  {wrapper: ".shop-img-wrapper4", list:".shop-list__item4"},
  {wrapper: ".shop-img-wrapper5", list:".shop-list__item5"},
  {wrapper: ".shop-img-wrapper6", list:".shop-list__item6"},
]

const shopListItem2 = [
  {wrapper: ".shop-img-wrapper1", list:".shop-list__item-pc1"},
  {wrapper: ".shop-img-wrapper2", list:".shop-list__item-pc2"},
  {wrapper: ".shop-img-wrapper3", list:".shop-list__item-pc3"},
  {wrapper: ".shop-img-wrapper4", list:".shop-list__item-pc4"},
  {wrapper: ".shop-img-wrapper5", list:".shop-list__item-pc5"},
  {wrapper: ".shop-img-wrapper6", list:".shop-list__item-pc6"},
]

$.each(shopListItem, function(index, value){
  if ($(window).width() <= 1080){
    $("" + value.wrapper).click(function(){
      $("" + value.list).find(".shop-modal").toggleClass("is_shop_modal_active");
      $("" + value.list).find(".shop-modal__bg").toggleClass("is_active");
      $(this).find(".shop-img-dark").toggleClass("is_shop-img-dark_none");
      $(this).find(".shop-bg-img").toggleClass("is_shop-bg-img_widen")
    })
  }
})
  



$.each(shopListItem2, function(index, value){
  if ($(window).width() >= 1080){
    $("" + value.wrapper).click(function(){
      $("" + value.list).addClass("is_active")
      let c = $("" + value.list).hasClass("is_active")
      let d = $(".shop-img-dark").hasClass("is_shop-img-dark_none")
      let e = $(".shop-bg-img").hasClass("is_shop-bg-img_widen")
      if (d) {
        $(".shop-img-dark").removeClass("is_shop-img-dark_none")
        $(".shop-list__item-pc").removeClass("is_active")
      }
      if(e) {
        $(".shop-bg-img").removeClass("is_shop-bg-img_widen")
      }
      if (c){
        $(".shop-list__item-pc").css("display","none");
        $(this).find(".shop-img-dark").toggleClass("is_shop-img-dark_none");
        $(this).find(".shop-bg-img").toggleClass("is_shop-bg-img_widen")
        $("" + value.list).fadeIn();
      } else {
        $("" + value.list).fadeOut();
      }
    })
  }
})


$(".service-modal-img-popup").hide();

$(".shop-modal__item").click(function(){
  $(".service-modal-img-popup").fadeIn();
  let posi = $(window).scrollTop();
  $(".l_home").css({
    position: 'fixed',
    top: -1 * posi,
  });
})

$(".service-modal-img-popup").click(function(){
  $(".service-modal-img-popup").fadeOut();
  let topPosi = $('.l_home').css("top");
  let topPosiParce = parseInt(topPosi) * -1
  $('html,body').animate({scrollTop: topPosiParce},0);
  $('.l_home').css("position","static");
})
$(".shop-modal__item-img").click(function(){
  let dataUrl = $(this).attr('data-url');
  $(".popup-inner__img").attr('src',dataUrl);
});

$(".aniversary-movie-logo-bg").hide();
$(".aniversary").hover(function(){
  $(".aniversary-movie-logo-bg").fadeIn();
},
function(){
  $(".aniversary-movie-logo-bg").fadeOut();
})

});