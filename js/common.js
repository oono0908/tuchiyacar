$(function() {
  $(".nav-btn__inner").click(function() {
    $(".nav").toggleClass("is_nav_active");
    $(".nav-btn__inner").toggleClass("is_nav_arrow_top_active");
    $(".nav-btn__inner").toggleClass("is_nav_arrow_bottom_active");
  })
  $(".to-top").click(function () {
    var position = 0;
    var speed = 600;
    $("html,body").animate({scrollTop:position},speed);
  });
  $(".report").hide();
  $(".campaign").click(function(){
    if($(window).width() <= 1079) {
    $(".report").css("transform","translateY(0)")
    } else {
      $(".report").fadeIn();
    }
  })
  $(".report").click(function(){
    if($(window).width() <= 1079) {
    $(".report").css("transform","translateY(-100%)")
    } else {
      $(".report").fadeOut();
    }
  })
  $(".nav-list__item").hover(function(){
    $(this).find(".nav-list__item-img").addClass("is_nav-list__item_rotate");
    $(this).find(".common-list").addClass("is_company-list_active")
  },
  function(){
    $(this).find(".nav-list__item-img").removeClass("is_nav-list__item_rotate");
      $(".common-list").removeClass("is_company-list_active")
    }
  )

});