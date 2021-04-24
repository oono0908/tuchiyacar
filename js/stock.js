$(function() {
  $('.baner-list').slick({
    dots: true,
    dotsClass: 'slide-dots',
    centerMode:true,
    autoplay: true, 
    autoplaySpeed: 4000, 
    prevArrow: '<div class="slide-btn-left"><img class="arrow arrow-left" src="../image/img_arrowprev.png"></div>',
    nextArrow: '<div class="slide-btn-right"><img class="arrow arrow-right" src="../image/img_arrownext.png"></div>',
    centerPadding: "100px",
    responsive: [{
      breakpoint: 1081,
      settings: {
        centerPadding:'10px',
      }
    }]
  });

  $(".more-btn").click(function(){
    let parent = $(this).parent().parent()
     if ($(this).hasClass("item02-btn")){
       parent.find(".item-02").fadeIn();
       parent.find(".item02-btn").fadeOut();
       parent.find(".item03-btn").fadeIn()
     } else if ($(this).hasClass("item03-btn")){
       parent.find(".item-03").fadeIn();
       parent.find(".item03-btn").fadeOut();
     }
  })

    $(".to-top").click(function () {
      var position = 0;
      var speed = 600;
      $(".l_home").animate({scrollTop:position},speed);
    });

    $(".modal-btn").click(function(){
      $(".dropdown-list").toggleClass("is_dropdown-list_active");
    })

    $(".brand-list__item").click(function(){
      let check = $(this).find(".list__item-check")
      let item = $(this)
      if (check.prop("checked") === true) {
        item.addClass("is_item-brand_active")
      } else if (check.prop("checked") === false){
        item.removeClass("is_item-brand_active")
    }
    })


    const valall = []
    $(".check-label").click(function(e){
      let type = $(this).find(".check-type")
      if (type.prop('checked')) {
        type.prop('checked', false);
      } else {
        type.prop('checked', true);
      }
        let p = $(this).find(".check-type").val()
          if (valall.indexOf(p) === -1){
            valall.push(p)
            $(".chose-car").val(valall)
          } else {
            let num = $.inArray(p, valall);
            valall.splice(num,1)
            $(".chose-car").val(valall)
          }
          console.log(valall)
    return false
    })

    $(".allClear-btn").click(function(ev){
      $("input[name='check-type']").prop('checked', false);
      $("input[name='brand-check']").prop('checked', false);
      $(".chose-car").val("");
      valall.length = 0;
      $(".brand-list__item").removeClass("is_item-brand_active")
      $(".area").removeClass("is_area_active");
      ev.preventDefault();
    })
    $(".clear-btn").click(function(ev){
      $("input[name='check-type']").prop("checked", false);
      $(".chose-car").val("");
      valall.length = 0;
      ev.preventDefault();
    })

    $(".close-btn-for-searchModal").click(function(ev){
      $("input[name='check-type']").prop('checked', false);
      $("input[name='brand-check']").prop('checked', false);
      $(".chose-car").val("");
      valall.length = 0;
      $(".brand-list__item").removeClass("is_item-brand_active");
      $("input[name='check-type']").prop("checked", false);
      $(".chose-car").val("");
      valall.length = 0;
      ev.preventDefault();
    })

    $(".close-btn-for-searchModal").hide();
    let makerName = function(){
      if ($(window).width() <= 1080){
    $(".close-btn-for-searchModal").click(function(){
      $(".l_maker-name-search").fadeOut();
      $(".close-btn-for-searchModal").fadeOut();
      $(".l_header").css("background-color","#a2be01");
      $(".inquire").fadeIn();
      $(".search").fadeIn();
      $(".l_home").css("overflow","scroll");
    })
    $(".item-maker-search").click(function(){
      $(".l_maker-name-search").fadeIn();
      $(".close-btn-for-searchModal").fadeIn();
      $(".l_header").css("background-color","black");
      $(".inquire").fadeOut();
      $(".search").fadeOut();
      $(".l_home").css("overflow","hidden");
    })
  } else if ($(window).width() > 1080){
    $(".item-maker-search").hover(function(){
      $(".l_maker-name-search").fadeIn();
    },
    function () {
      $(".l_maker-name-search").fadeOut();
    })
    
  }
  }
  makerName();

  let body = function(){
    if ($(window).width() <= 1080){
    $(".close-btn-for-searchModal").click(function(){
      $(".l_body-search").fadeOut()
      $(".close-btn-for-searchModal").fadeOut();
      $(".l_header").css("background-color","#a2be01")
      $(".inquire").fadeIn();
      $(".search").fadeIn();
      $(".l_home").css("overflow","scroll");
    })
    $(".item-body-search").click(function(){
      $(".l_body-search").fadeIn();
      $(".close-btn-for-searchModal").fadeIn();
      $(".l_header").css("background-color","black")
      $(".inquire").fadeOut();
      $(".search").fadeOut();
      $(".l_home").css("overflow","hidden");
    })
  } else if ($(window).width() > 1080){
    $(".item-body-search").hover(function(){
      $(".l_body-search").fadeIn();
    },
    function () {
      $(".l_body-search").fadeOut();
    })
  }
}
body();



   let price = function(){
   if ($(window).width() <= 1080){
    $(".close-btn-for-searchModal").click(function(){
      $(".l_price-search").fadeOut()
      $(".close-btn-for-searchModal").fadeOut();
      $(".l_header").css("background-color","#a2be01")
      $(".inquire").fadeIn();
      $(".search").fadeIn();
      $(".l_home").css("overflow","scroll");
    })
    $(".item-price-search").click(function(){
      $(".l_price-search").fadeIn();
      $(".close-btn-for-searchModal").fadeIn();
      $(".l_header").css("background-color","black")
      $(".inquire").fadeOut();
      $(".search").fadeOut();
      $(".l_home").css("overflow","hidden");
    })
    } else if ($(window).width() > 1080){
    $(".item-price-search").hover(function(){
      $(".l_price-search").fadeIn();
    },
    function () {
      $(".l_price-search").fadeOut();
    }
    )}
  }
  price();


    $(".allClear-btn-for-price").click(function(){
      $("option:selected").prop("selected", false)
    })

    $(".close-btn-for-searchModal").click(function(){
      $(".l_all-search").fadeOut()
      $(".close-btn-for-searchModal").fadeOut();
      $(".inquire").fadeIn();
      $(".search").fadeIn();
      $(".l_home").css("overflow","scroll");
      if ($(window).width() > 1081){
        $(".l_header").css("background-color","white")
      } else if ($(window).width() <= 1080){
        $(".l_header").css("background-color","#a2be01")
      }
    })
    $(".item-all-search, .item01").click(function(){
      $(".l_all-search").fadeIn();
      $(".close-btn-for-searchModal").fadeIn();
      $(".l_header").css("background-color","black")
      $(".inquire").fadeOut();
      $(".search").fadeOut();
      $(".l_home").css("overflow","hidden");
    })

    $(".search").click(function(){
      $(".l_all-search").fadeIn();
      $(".close-btn-for-searchModal").fadeIn();
      $(".l_header").css("background-color","black")
      $(".inquire").fadeOut();
      $(".search").fadeOut();
      $(".l_home").css("overflow","hidden");
    })

    $(".store-item").click(function(e){
      let area = $(this).attr("data-id");
      let a = $(this)
      let item = $(this).find(".list__item-check");

      if (item.prop('checked')) {
        item.prop('checked', false);
      } else {
        item.prop('checked', true);
      }
      if (item.prop("checked")== false) {
        
        a.addClass("is_item-brand_active")
        $("." + area).addClass("is_area_active")
      } else if (item.prop("checked") == true){
        a.removeClass("is_item-brand_active")
        $("." + area).removeClass("is_area_active")
    }
      e.preventDefault();
    })
    let footerTop = $('.l_footer').offset().top;
  $(".l_groval-container").scroll(function(){
    let homeTop = $(".l_groval-container").scrollTop() + $(window).height();
    if (homeTop >= footerTop){
      $(".l_right-menu").css("bottom","70px")
    } else {
      $(".l_right-menu").css("bottom","1%")
    }
  })
  $(".item04").click(function(){
      let position = 0;
      let speed = 600;
    $(".l_groval-container").animate({scrollTop:position},speed);
  })
  $(".item04").click(function(){
    let position = 0;
    let speed = 600;
  $(".l_groval-container").animate({scrollTop:position},speed);
})
  $(".right-menu-item").hover(function(){
    $(this).addClass("is_right-menu-item_active");
  },
  function(){
    $(this).removeClass("is_right-menu-item_active");
    return false;
  })
  $(".item01").click(function(){

  })
})