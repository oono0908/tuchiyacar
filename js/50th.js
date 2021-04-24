$(function() {
  $(".nav-item__img-before").hover(function(){
    $(this).toggleClass("is_nav-img_active");
  })

  $(".nav-btn").click(function(){
    $(".nav-50th").toggleClass("is_nav-50th_active");
    $(".l_header").toggleClass("is_header_active");
    if($(".nav-50th").hasClass("is_nav-50th_active")){
      $(".nav-btn-img").hide();
    $(".nav-btn-batu").fadeIn();
    } else {
      $(".nav-btn-batu").hide();
    $(".nav-btn-img").fadeIn();
    }
  })

  $(".to-top-pc").click(function(){
    $(".to-top-pc").css("transform","translateX(10%)");
    setTimeout(function(){
      let position = 0;
      let speed = 600;
    $(".gloval-container").animate({scrollTop:position},speed);
    },1000);
  })
  

  setInterval(function(){
    let nowDate = new Date();
    let dnumNow = nowDate.getTime();
    let targetDate = new Date( 2020, 6, 27 );  
    let dnumTarget = targetDate.getTime();
    let diffMSec = dnumNow - dnumTarget;
    let diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
    let showDays = Math.ceil( diffDays ); 
    let hour = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();
    
    $(".day").text(showDays);
    $(".hour").text(hour);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

  }, 1000)

  $('.gloval-container').scroll(function() {
    let scrollTop = ($(this).scrollTop() * 0.3);
    if(scrollTop <= 90){
        $(".car-area__car").css("left", scrollTop + '%');
    } else if (scrollTop >= 91){
      $(".car-area__car").css("left", "91%")
    }
    
    let windowHeight = 600
    let scrollTopForHistory = $(this).scrollTop()
    let heroHeight = $(".hero").height();
    let banerHeight = $(".baner").height();
    let newsHeight = $(".news").height();
    
    let breakPoint = 800
    let totalHeightForHistory01 = heroHeight + banerHeight + newsHeight
    let totalHeightForHistory02 = totalHeightForHistory01 + windowHeight * 2
    let totalHeightForHistory03 = totalHeightForHistory02 + windowHeight * 2 + breakPoint
    let totalHeightForHistory04 = totalHeightForHistory03 + windowHeight * 2 + breakPoint
    let totalHeightForHistory05 = totalHeightForHistory04 + windowHeight * 2 + breakPoint
    let totalHeightForHistory06 = totalHeightForHistory05 + windowHeight * 2 + breakPoint
    let totalHeightForHistory07 = totalHeightForHistory06 + windowHeight * 2 + breakPoint

    if (totalHeightForHistory01 < scrollTopForHistory && totalHeightForHistory02 > scrollTopForHistory){
      $(".history01").fadeIn();
    $(".car-area-pc__car").css("left", 0 + '%')
    $(".car-area-pc__position").fadeIn()
    $(".car-area-pc__year").fadeIn()
    } else if (totalHeightForHistory02 + breakPoint < scrollTopForHistory && totalHeightForHistory03 > scrollTopForHistory){
      $(".history02").fadeIn();
      $(".car-area-pc__car").css("left", 20 + '%')
      $(".car-area-pc__position").fadeIn()
      $(".car-area-pc__position").css("left", 20 + '%')
      $(".txt-1977").fadeIn();
      $(".car-area-pc__year").css("left", 20 + '%')
    } else if (totalHeightForHistory03 + breakPoint < scrollTopForHistory && totalHeightForHistory04 > scrollTopForHistory){
      $(".history03").fadeIn();
      $(".car-area-pc__car").css("left", 40 + '%')
      $(".car-area-pc__position").fadeIn()
      $(".car-area-pc__position").css("left", 40 + '%')
      $(".txt-1986").fadeIn();
      $(".car-area-pc__year").css("left", 40 + '%')
    } else if (totalHeightForHistory04 + breakPoint < scrollTopForHistory && totalHeightForHistory05 > scrollTopForHistory){
      $(".history04").fadeIn();
      $(".car-area-pc__car").css("left", 60 + '%')
      $(".car-area-pc__position").fadeIn()
      $(".car-area-pc__position").css("left", 60 + '%')
      $(".txt-1996").fadeIn();
      $(".car-area-pc__year").css("left", 60 + '%')
    } else if (totalHeightForHistory05 + breakPoint < scrollTopForHistory && totalHeightForHistory06 > scrollTopForHistory){
      $(".history05").fadeIn();
      $(".car-area-pc__car").css("left", 80 + '%')
      $(".car-area-pc__position").fadeIn()
      $(".car-area-pc__position").css("left", 80 + '%')
      $(".txt-2004").fadeIn();
      $(".car-area-pc__year").css("left", 80 + '%')
    } else if (totalHeightForHistory06 + breakPoint < scrollTopForHistory && totalHeightForHistory07 > scrollTopForHistory){
      $(".history06").fadeIn();
      $(".car-area-pc__car").css("left", 100 + '%')
      $(".car-area-pc__position").fadeIn()
      $(".car-area-pc__position").css("left", 100 + '%')
      $(".txt-2017").fadeIn();
      $(".car-area-pc__year").css("left", 100 + '%')
    }  else {
      $(".history01").fadeOut();
      $(".history02").fadeOut();
      $(".history03").fadeOut();
      $(".history04").fadeOut();
      $(".history05").fadeOut();
      $(".history06").fadeOut();
      $(".txt-1969").fadeOut();
      $(".txt-1969").fadeOut();
      $(".txt-1977").fadeOut();
      $(".txt-1986").fadeOut();
      $(".txt-2004").fadeOut();
      $(".txt-2017").fadeOut();
      $(".car-area-pc__position").fadeOut();
    }
    if (totalHeightForHistory01 < scrollTopForHistory && totalHeightForHistory07 > scrollTopForHistory){
      $(".car-area-pc").fadeIn();
    } else {
      $(".car-area-pc").fadeOut();
    }
    if (totalHeightForHistory04 + breakPoint < scrollTopForHistory){
      $(".to-top-pc").fadeIn();
    } else{
      $(".to-top-pc").fadeOut();
    }
    
  });

  let link = function(){
    let history = $('.history').offset().top;
    let movie = $('.movie').offset().top;
    let tsuchista = $('.tsuchista').offset().top;
    let speed = 600;
    
    let listArray = [
      {btn: ".history-btn",offSet:history},
      {btn:".movie-btn",offSet:movie},
      {btn:".tsuchista-btn",offSet:tsuchista},
      {btn:".top-page-btn",offSet:0}
    ]
    $.each(listArray, function(index, value){
    $("" + value.btn).click(function(){
      $(".nav-50th").removeClass("is_nav-50th_active");
      $(".l_header").removeClass("is_header_active");
      $(".nav-btn-batu").hide();
      $(".nav-btn-img").fadeIn();
      $(".gloval-container").animate({scrollTop:value.offSet},speed);
    })
  })
  }
  
  link();

  $(".more-btn").click(function(){
    $('.news-list__item').css("display","block");
    $(".more-btn").css("display","none")
  })

  $(".is_item_active").click(function(){
    let data = $(this).attr("data-id");
    $('.' + data).fadeIn();
  })
  $(".tsuchista-modal-pc").click(function(){
    $(".common-modal").fadeOut();
  }
  )
  $(".common-modal__btn").click(function(){
    $(".common-modal").fadeOut();
  })
   
  $(".more-tsuchista-btn1").click(function(){
    $(".more-tsuchista-btn1").css("display","none")
    $(".is_tsuchista_active1").fadeIn();
  })
  $(".more-tsuchista-btn2").click(function(){
    $(".more-tsuchista-btn2").css("display","none")
    $(".is_tsuchista_active2").fadeIn();
  })
  $(".more-tsuchista-btn3").click(function(){
    $(".more-tsuchista-btn3").css("display","none")
    $(".is_tsuchista_active3").fadeIn();
  })

  $(".is_tsuchista-modal_active").click(function(){
    let id = $(this).attr("data-id");
    $('.' + id).fadeIn();
  })

  $(".baner").hover(function(){
    if ($(window).width() >= 1080){
      $(".baner__tsuchifes-pc-before").toggleClass("is_baner_none");
      $(".baner__tsuchifes-pc-after").toggleClass("is_baner_active");
    }
  })

  $(".more-tsuchista-btn-pc").click(function(){
    if($(window).width() >= 1080){
      $(".item02-pc").fadeIn();
      $(".more-tsuchista-btn-pc2").fadeIn();
      $(".more-tsuchista-btn-pc1").hide();
    }
  })

  let init = function(){
    if ($(window).width() >= 1080){
      $(".item02-pc").hide();
      $(".history01").hide();
    } else if ($(window).width() <= 1080){
      $(".more-tsuchista-btn-pc2").hide();
      $(".modal-top-pc-active").hide();
    } 
  }
  init();

$(".movie-body__yutube").click(function(){
  $(".movie-img").css("display","none")
  $(this).find("iframe").css("opacity","1")

})
});
