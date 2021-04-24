$(function() {
  let width = $(window).width();
if (width <= 1080){
  $('.pic-slide-list').slick({
    dots:false,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows:false,
    autoplay: true, 
    autoplaySpeed: 2000,
    speed: 6000,
    centerMode:true,
  })
  .on('beforeChange', function() {
    $(".slick-slide").find(".pic-comment").removeClass("is_slick-comment_active")
  })
  .on('afterChange', function() {
   $(".slick-current").find(".pic-comment").addClass("is_slick-comment_active")
  });
} else {
  $('.pic-slide-list').slick({
    dots:false,
    slidesToShow: 10, 
    slidesToScroll: 1,
    arrows:false,
    autoplay: true, 
    autoplaySpeed: 0,
    speed: 6000,
    centerMode:true,
    cssEase: 'linear',
  })
}

$(".pic-slide-list__item").hover(
  function(){
  $(this).find(".pic-comment").addClass("is_slick-comment_active_pc")
  return false;
  },
  function(){
    $(this).find(".pic-comment").removeClass("is_slick-comment_active_pc")
    return false;
}
);  

let sum = 0
$(".arrow-right").click(function(){
  sum += 1

  if (sum == 1){
    $(".list-dots__item").eq(0).css("opacity","0.7")
  $(".hero-list__item").eq(0).css("display","none")
  $(".hero-list__item").eq(1).css("display","block")
  $(".arrow-left").css("display","block")
  $(".list-dots__item").eq(1).css("opacity","1")
  } else if(sum == 2){
    $(".list-dots__item").eq(1).css("opacity","0.7")
    $(".hero-list__item").eq(1).css("display","none")
  $(".hero-list__item").eq(2).css("display","block")
  $(".arrow-right").css("display","none")
  $(".list-dots__item").eq(0).css("opacity","1")
  }
})

$(".arrow-left").click(function(){
  sum -= 1
  if (sum == 1){
    $(".list-dots__item").eq(2).css("opacity","0.7")
  $(".hero-list__item").eq(2).css("display","none")
  $(".hero-list__item").eq(1).css("display","block")
  $(".arrow-right").css("display","block")
  $(".list-dots__item").eq(1).css("opacity","1")
  } else if(sum == 0){
    $(".list-dots__item").eq(1).css("opacity","0.7")
    $(".hero-list__item").eq(1).css("display","none")
  $(".hero-list__item").eq(0).css("display","block")
  $(".arrow-left").css("display","none")
  $(".list-dots__item").eq(0).css("opacity","1")
  }
})



$(".recruit-history").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recuruit_history.html';
  }, 2000);
  }
})
$(".recruit-talk").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_talk.html';
  }, 2000);
}
})
$(".recruit-message").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_message.html';
  }, 2000);
}
})
$(".recruit-effort").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_effort.html';
  }, 2000);
}
})
$(".recruit-training").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_training.html';
  }, 2000);
}
})
$(".recruit-company").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_company_info.html';
  }, 2000);
}
})
$(".recruit-q-and-a").click(function(){
  if (width <= 1080){
  setTimeout(function(){
    window.location.href = 'recruit_q_and_a.html';
  }, 2000);
}
})

$(".recruit-list__item").hover(
  function(){
    $(this).find(".recruit-click-after").css("transform","translate(-50%,-50%)")
  },
  function(){
    $(this).find(".recruit-click-after").css("transform","translate(-50%,200px)")
  }
)

})