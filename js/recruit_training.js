$(function() {
  let sectionTop2 = $(".section3").offset().top
  let sectionTop3 = $(".section5").offset().top

  $(".l_home").scroll(function(){
    let scroll = $(".l_home").scrollTop();
    console.log("kkkkk")
    if(sectionTop2 <= scroll){
      $(".effort-balloon-wrapper").addClass("is_balloon_active")
    }
    if(sectionTop3 - 300 <= scroll){
      $(".training-section-img").css("opacity","1")
    }
    return false;
  })
})