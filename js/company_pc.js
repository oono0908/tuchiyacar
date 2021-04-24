$(function() {
  let itemTop1 = $(".hero-list__item").eq(1).offset().top
  let itemTop2 = $(".hero-list__item").eq(2).offset().top
  let itemTop3 = $(".hero-list__item").eq(3).offset().top
  let serviceTop = $(".service").offset().top

  let itemActive1 = serviceTop + 700
  let itemActive2 = itemActive1 + 700
  let itemActive3 = itemActive2 + 700
  let itemActive4 = itemActive3 + 700
  let itemActive5 = itemActive4 + 700
let scroll = function(){
  if ($(window).width() >= 1080 ){
  $(".l_home").scroll(function(){
    let homeTop = $(".l_home").scrollTop();
    if (itemTop1 - 400 >= homeTop){
      $(".hero-list__item").eq(0).css("opacity","1")
    } else if (itemTop1 - 200<= homeTop && itemTop2 - 400>= homeTop){
      $(".hero-list__item").eq(0).css("opacity","0")
      $(".hero-list__item").eq(1).css("opacity","1")
    } else if (itemTop2 - 200<= homeTop && itemTop3 - 400 >= homeTop){
      $(".hero-list__item").eq(1).css("opacity","0")
      $(".hero-list__item").eq(2).css("opacity","1")
    } else if (itemTop3 -200 <= homeTop){
      $(".hero-list__item").eq(2).css("opacity","0")
      $(".hero-list__item").eq(3).css("opacity","1")
    } else {
      $(".hero-list__item").css("opacity","0")
    }

    if (serviceTop <= homeTop){
      $(".service").addClass("is_list-fixed")
    } else {
      $(".service").removeClass("is_list-fixed")
    }

    if (itemTop1 - 400 <= homeTop){
      $(".l_header").css("opacity","0")
      $(".company-title-pc").css("opacity","0")
    } else {
      $(".l_header").css("opacity","1")
      $(".company-title-pc").css("opacity","1")
    }
    
    if (serviceTop <= homeTop && itemActive1 > homeTop){
      $(".inner__active2").css("opacity","0")
      $(".service-list__item").eq(1).css("opacity","0")
      $(".service-list__item").eq(0).css("opacity","1")
      $(".inner__active1").css("opacity","1")
    } else if (itemActive1 <= homeTop && itemActive2 > homeTop){
      $(".inner__active3").css("opacity","0")
      $(".inner__active1").css("opacity","0")
      $(".service-list__item").eq(2).css("opacity","0")
      $(".service-list__item").eq(0).css("opacity","0")
      $(".service-list__item").eq(1).css("opacity","1")
      $(".inner__active2").css("opacity","1")
    }  else if (itemActive2 <= homeTop && itemActive3 > homeTop){
      $(".inner__active4").css("opacity","0")
      $(".inner__active2").css("opacity","0")
      $(".service-list__item").eq(3).css("opacity","0")
      $(".service-list__item").eq(1).css("opacity","0")
      $(".service-list__item").eq(2).css("opacity","1")
      $(".inner__active3").css("opacity","1")
    }else if (itemActive3 <= homeTop && itemActive4 > homeTop){
      $(".inner__active5").css("opacity","0")
      $(".inner__active3").css("opacity","0")
      $(".service-list__item").eq(4).css("opacity","0")
      $(".service-list__item").eq(2).css("opacity","0")
      $(".service-list__item").eq(3).css("opacity","1")
      $(".inner__active4").css("opacity","1")
    }else if (itemActive4 <= homeTop && itemActive5 > homeTop){
      $(".inner__active6").css("opacity","0")
      $(".inner__active4").css("opacity","0")
      $(".service-list__item").eq(5).css("opacity","0")
      $(".service-list__item").eq(3).css("opacity","0")
      $(".service-list__item").eq(4).css("opacity","1")
      $(".inner__active5").css("opacity","1")
    }else if (itemActive5 <= homeTop){
      $(".inner__active5").css("opacity","0")
      $(".service-list__item").eq(4).css("opacity","0")
      $(".service-list__item").eq(5).css("opacity","1")
      $(".inner__active6").css("opacity","1")
    } else {
      $(".service-list__item").not(":first").css("opacity","0");
      $(".inner__active").css("opacity","0");
      $(".inner__active1").css("opacity","1");
    }
  })
  



  $(".to-top").click(function(){
    var position = 0;
  var speed = 600;
  $(".l_home").animate({scrollTop:position},speed);
  })
}
}
scroll();
})