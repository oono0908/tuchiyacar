$(function(){
  
  $('.car-main__center-inner').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false, 
    autoplay:false,
    prevArrow: '<div class="car-main__btn car-main__btn-left btn-left-for-slick"><img class="arrow-img"src="../image/btn_prev_stock_inner.png"></div>',
    nextArrow: '<div class="car-main__btn car-main__btn-right btn-right-for-slick"><img class="arrow-img"src="../image/btn_prev_stock_inner.png"></div>'
  });
  $(".to-top").click(function(){
    var position = 0;
    var speed = 600;
    $(".l_home").animate({scrollTop:position},speed);
  })

  let num = 0
  let slickChangeRight = function(){
    $(".btn-right-for-slick").click()
  }
  let slickChangeLeft = function(){
    $(".btn-left-for-slick").click()
  }
  $(".car-btn-right").click(function(){
    num += 1
    console.log(num)
    if(num == 29){
      num -= 1
      return
    } else{
      $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    }
    if(num == 12){
      slickChangeRight();
      $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    } else if (num == 24){
      slickChangeRight();
      $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    }
  })
  $(".car-btn-left").click(function(){
    num -= 1
    console.log(num)
    if(num == -1){
      num += 1
    return
    } else{
    $(".car-main__center-img").removeClass("is_img_active")
    $(".car-main__center-img").eq(num).addClass("is_img_active")
    $(".inner01-list__item").removeClass("is_list_img_active")
    $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    }
    if(num == 11){
      slickChangeLeft();
      $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    } else if (num == 23){
      slickChangeLeft();
      $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num + 5).addClass("is_list_img_active")
    }
  })
  $(".inner01-list__item-img").on('click',function(){
    let index = $('.inner01-list__item-img').index(this);
    num = index
    $(".car-main__center-img").removeClass("is_img_active")
      $(".car-main__center-img").eq(num).addClass("is_img_active")
      $(".inner01-list__item").removeClass("is_list_img_active")
      $(".inner01-list__item").eq(num).addClass("is_list_img_active")
      num -= 5
  });
  $(".baner").click(function(){
    $(".tuchiya-movie").fadeIn();
  })
  $(".close-btn").click(function(){
    $(".tuchiya-movie").fadeOut();
    return false;
  })
})