$(function() {

  let sectionTop = $(".section1").offset().top
  let sectionTop1 = $(".section2").offset().top
  let sectionTop2 = $(".section3").offset().top
  let sectionTop3 = $(".section4").offset().top

  $(".l_home").scroll(function(){
    let scroll = $(".l_home").scrollTop();

    if (sectionTop <= scroll){
      $(".effort-balloon-wrapper").addClass("is_balloon_active")
        $(".dots01").addClass("is_dots_show1")
        $(".dots02").addClass("is_dots_show2")
        $(".dots03").addClass("is_dots_show3")
        $(".effort-sub-img1").addClass("is_dots_show4")
    } 
    if(sectionTop1 <= scroll){
      $(".dots04").addClass("is_dots_show1")
      $(".dots05").addClass("is_dots_show2")
      $(".dots06").addClass("is_dots_show3")
      $(".effort-sub-img2").addClass("is_dots_show4")
    }
    if(sectionTop2 <= scroll){
      $(".dots07").addClass("is_dots_show1")
      $(".dots08").addClass("is_dots_show2")
      $(".dots09").addClass("is_dots_show3")
      $(".effort-sub-img3").addClass("is_dots_show4")
    }
    if(sectionTop3 - 300 <= scroll){
      $(".dots10").addClass("is_dots_show1")
      $(".dots11").addClass("is_dots_show2")
      $(".dots12").addClass("is_dots_show3")
      $(".effort-sub-img4").addClass("is_dots_show4")
    }
    return false;
  })
})