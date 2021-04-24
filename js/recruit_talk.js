$(function() {
  $(".cross-talk-list__item").hover(
    function(){
      $(this).find(".recruit-click-after").css("transform","translate(-50%,-50%)")
    },
    function(){
      $(this).find(".recruit-click-after").css("transform","translate(-50%,200px)")
    }
  )
})