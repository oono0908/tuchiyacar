$(function() {
  $('.recruit-btn').hover(
    function() {
      $(".recruit-btn").css("transform","translateX(-60%)")
      $(".recruit-btn-active").css("opacity","1")
    },
    function() {
      $(".recruit-btn").css("transform","translateX(50%)")
      $(".recruit-btn-active").css("opacity","0")
    }

);
return false;
})