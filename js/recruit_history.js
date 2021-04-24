$(function() {
 let windowWidth = $(window).width()

 let story01 = $(".is_story_top").offset().top
 let story02 = $(".story-list__item").eq(1).offset().top
 let story03 = $(".story-list__item").eq(2).offset().top
//  let story04 = $(".story02").find(".story-list__item").eq(0).offset().top
//  let story05 = $(".story02").find(".story-list__item").eq(1).offset().top
//  let story06 = $(".story02").find(".story-list__item").eq(2).offset().top
//  let story07 = $(".story02").find(".story-list__item").eq(3).offset().top


 
  $(".car").click(function(){
    $(".car-txt-img").fadeOut();
    $(".car-smoke-after1").addClass("is_smoke_show1")
    $(".car-smoke-after2").addClass("is_smoke_show2")
    $(".smoke-bg").addClass("is_smoke-bg_active")
    $(".story-column-inner").addClass("is_txt_active")
    setTimeout(function(){
      $(".car").css("right","200%")
  },1000);
  return false;
  })

  let sumStory = 0
  $(".btn-next").click(function(){
    classRemove();
    sumStory += 1
    if (sumStory == 1){
      $(".story01").css("display","none")
      $(".story02").css("display","block")
    } else if (sumStory == 2){
      $(".story02").css("display","none")
      $(".story03").css("display","block")
    }
    $(".car-smoke-after1").removeClass("is_smoke_show1")
    $(".car-smoke-after2").removeClass("is_smoke_show2")
    $(".smoke-bg").removeClass("is_smoke-bg_active")
    $(".story-column-inner").removeClass("is_txt_active")
    $(".car").css("right","5%")
    if (windowWidth <= 1080){
    scroll();
    } else if (windowWidth >= 1080){
      scroll2();
    }
  itemSet2();
  
  })

  $(".btn-back").click(function(){
    classRemove();
    sumStory -= 1
    if (sumStory == 0){
      $(".story02").css("display","none")
      $(".story01").css("display","block")
    } else if (sumStory == 1){
      $(".story03").css("display","none")
      $(".story02").css("display","block")
    }
    $(".car-smoke-after1").removeClass("is_smoke_show1")
    $(".car-smoke-after2").removeClass("is_smoke_show2")
    $(".smoke-bg").removeClass("is_smoke-bg_active")
    $(".story-column-inner").removeClass("is_txt_active")
    $(".car").css("right","5%")

    if (windowWidth <= 1080){
      scroll();
      } else if (windowWidth >= 1080){
        scroll2();
      }
    itemSet2();
   
  })
  $(".is_item_set").click(function(){
    itemSet3();
  })

  let scroll = function() {
    let speed = 400; 
    let position = $(".hero").height() - 70;
    $('.l_home').animate({scrollTop:position}, speed, 'swing');
    return false;
  };

  let scroll2 = function() {
    let speed = 0; 
    let position = 0
    $('.l_home').animate({scrollTop:position}, speed, 'swing');
    return false;
  };
  

  let itemSet = function(){
    $(".l_home").scroll(function(){
    let scrollTop = $(".l_home").scrollTop();
  
    if (story01 <= scrollTop){
       $(".story-title").addClass("is_story-title_fixed")
       $(".story-list__item").eq(0).css("opacity","1")
    } else {
      $(".story-title").removeClass("is_story-title_fixed")
    }

    if (story02 - 300 <= scrollTop){
      $(".story-list__item").eq(1).css("opacity","1")
    } 

    if (story03 - 300 <= scrollTop){
      $(".story-list__item").eq(2).css("opacity","1")
    } 

    if (story03 <= scrollTop){
      $(".car02").addClass("is_car_active")
      $(".story-column-inner").addClass("is_show")
    } 
return false;
  })
}

itemSet();

  let itemSet2 = function(){
   
    let story011 = $(".item04").offset().top
    let story021= $(".item05").offset().top
    let story031 = $(".item06").offset().top
    let story041 = $(".item07").offset().top

    $(".l_home").scroll(function(){
      let scrollTop = $(".l_home").scrollTop();
    if (story011 - 300 <= scrollTop){
      $(".item04").css("opacity","1")
    } 

    if (story021 - 300 <= scrollTop){
      $(".item05").css("opacity","1")
    } 

    if (story031 - 300 <= scrollTop){
      $(".item06").css("opacity","1")
    } 
    if (story041 - 300 <= scrollTop){
      $(".item07").css("opacity","1")
    } 

    return false;
  })

  }

  let itemSet3 = function(){

    let story012 = $(".item08").offset().top
    let story022= $(".item09").offset().top
    let story032 = $(".item10").offset().top
    let story042 = $(".item11").offset().top

    $(".l_home").scroll(function(){
      let scrollTop = $(".l_home").scrollTop();
    if (story012 - 300 <= scrollTop){
      $(".item08").css("opacity","1")
    } 

    if (story022 - 300 <= scrollTop){
      $(".item09").css("opacity","1")
    } 

    if (story032 - 300 <= scrollTop){
      $(".item10").css("opacity","1")
    } 

    if (story042 - 300 <= scrollTop){
      $(".item11").css("opacity","1")
    } 
    return false;
  })

  }

 
  let classRemove = function(){
    $(".story-title").removeClass("is_story-title_fixed")
      $(".story-list__item").eq(0).css("opacity","0")
      $(".story-title").removeClass("is_story-title_fixed")
      $(".story-list__item").eq(1).css("opacity","0")
      $(".story-list__item").eq(2).css("opacity","0")
      $(".car02").removeClass("is_car_active")
      $(".story-column-inner").removeClass("is_show")
  }
})