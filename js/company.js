$(function() {
  let width = $(window).width();
  if (width <= 1080){
  $('.hero-list').slick({
    dots: false,
    auroplay: false,
    swipe: true,
    arrows:false
  });
} else {
  $('.hero-list').slick('unslick');
}
if (width <= 1080){
  $('.service-list').slick({
    dots: true,
    dotsClass: 'slide-dots',
    auroplay: false,
    infinite: false,
    swipe: true,
    arrows:false
  });
} else {
  $('.service-list').slick('unslick');
}

  $(".service-list").on("afterChange",function(e){
    let $active = $(".service .slide-dots").find(".slick-active")
    let index = $(".service-list").find(".slick-active").index();
    let removePositionRight = $(".service").find(".position-right")
    let removePositionLeft = $(".service").find(".position-left")
    let removePositionCenter = $(".service").find(".position-center")
    let $li = $(".service-list .slide-dots li")

    if (index == 0){
      removePositionRight.removeClass("position-right")
      removePositionLeft.removeClass("position-left")
      removePositionCenter.removeClass("position-center")
      $active.addClass("position-first")
      $active.next("li").addClass("position-first-next")
      $active.next().next().addClass("position-first-next2")
    } else if (index == 5){
      removePositionRight.removeClass("position-over-right")
      removePositionRight.removeClass("position-right")
      removePositionLeft.removeClass("position-left")
      removePositionCenter.removeClass("position-center")
      $active.addClass("position-last")
      $active.prev().addClass("position-last-prev")
      $active.prev().prev().addClass("position-last-prev2")
    } else if (index == 1){
      $active.next().next().addClass("position-over-right")
      $active.removeClass("position-left")
      $active.next().removeClass("position-center")
      $active.next().removeClass("position-over-right")
      $active.prev().removeClass("position-over-left")
      $(".service-list").find(".position-first").removeClass("position-first")
      $(".service-list").find(".position-first-next").removeClass("position-first-next")
      $(".service-list").find(".position-first-next2").removeClass("position-first-next2")
        $active.addClass("position-center")
        $active.next("li").addClass("position-right")
        $active.prev("li").addClass("position-left")
    } else if (index == 2){
      $active.next().next().addClass("position-over-right")
      $active.prev().removeClass("position-over-left")
      $li.eq(3).removeClass("position-over-right")
      removePositionRight.removeClass("position-right")
      removePositionLeft.removeClass("position-left")
      removePositionCenter.removeClass("position-center")
        $active.addClass("position-center")
        $active.next("li").addClass("position-right")
        $active.prev("li").addClass("position-left")
        $active.prev().prev().addClass("position-over-left")
    } else if (index == 3){
      $active.next().next().addClass("position-over-right")
      $active.prev().removeClass("position-over-left")
      $li.eq(4).removeClass("position-over-right")
      removePositionRight.removeClass("position-right")
      removePositionLeft.removeClass("position-left")
      removePositionCenter.removeClass("position-center")
        $active.addClass("position-center")
        $active.next("li").addClass("position-right")
        $active.prev("li").addClass("position-left")
        $active.prev().prev().addClass("position-over-left")
    } else if (index == 4){
      $li.eq(5).removeClass("position-over-right")
      removePositionRight.removeClass("position-right")
      removePositionLeft.removeClass("position-left")
      removePositionCenter.removeClass("position-center")
      $(".service-list").find(".position-last").removeClass("position-last")
      $(".service-list").find(".position-last-prev").removeClass("position-last-prev")
      $(".service-list").find(".position-last-prev2").removeClass("position-last-prev2")
        $active.addClass("position-center")
        $active.next("li").addClass("position-right")
        $active.prev("li").addClass("position-left")
        $active.prev().prev().addClass("position-over-left")
    }
  return false;
  })


  let init = function(){
    let $active = $(".service").find(".slick-active");
    let $li = $(".service-list .slide-dots li")
    $li.eq(3).addClass("position-over-right")
    $li.eq(4).addClass("position-over-right")
    $li.eq(5).addClass("position-over-right")
    $active.addClass("position-first");
    $active.next("li").addClass("position-first-next");
    $active.next().next().addClass("position-first-next2");

  }
  init();

  let infoTop = $(".infomation").offset().top;
  $(".l_home").scroll(function(){
    let homeTop = $(".l_home").scrollTop();
    console.log(infoTop)
    if (infoTop - 600 >= homeTop ){
       $(".recruit-btn-after").fadeIn();
       $(".recruit-btn-before").fadeOut();
       $(".l_home").css("background-image","url(../image/bg_main01.jpg)")
    } else {
      $(".recruit-btn-after").fadeOut();
      $(".recruit-btn-before").fadeIn();
       $(".l_home").css({"background-image":"url(../image/bg_main02.jpg)",
       "background-size":"cover",
    })
    }
  })
  $(".to-top").click(function () {
    var position = 0;
    var speed = 600;
    $(".l_home").animate({scrollTop:position},speed);
  });

})