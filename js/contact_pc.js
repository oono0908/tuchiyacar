$(function() {
  let width = $(window).width()
  $(".form-title").eq(0).click(function(){
    if (width <= 1080){
      window.location.href = 'contact01.html';
    } else{
    $(".is_contact_none").css("display","none")
    $(".form-title").removeClass("is_form-title_active")
    $(".is_contact_none").eq(0).css("display","block")
    $(this).addClass("is_form-title_active")
    }
  })
  $(".form-title").eq(1).click(function(){
    if (width <= 1080){
      window.location.href = 'contact02.html';
    } else{
    $(".is_contact_none").css("display","none")
    $(".form-title").removeClass("is_form-title_active")
    $(".is_contact_none").eq(1).css("display","block")
    $(this).addClass("is_form-title_active")
    }
  })
  $(".form-title").eq(2).click(function(){
    if (width <= 1080){
      window.location.href = 'contact03.html';
    } else{
    $(".is_contact_none").css("display","none")
    $(".form-title").removeClass("is_form-title_active")
    $(".is_contact_none").eq(2).css("display","block")
    $(this).addClass("is_form-title_active")
    }
  })
  $(".form-title").eq(3).click(function(){
    if (width <= 1080){
      window.location.href = 'contact04.html';
    } else{
    $(".is_contact_none").css("display","none")
    $(".form-title").removeClass("is_form-title_active")
    $(".is_contact_none").eq(3).css("display","block")
    $(this).addClass("is_form-title_active")
    }
  })
  
})