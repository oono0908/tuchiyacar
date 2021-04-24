$(function() {

  $("input[name='year-version']").blur(function(){
    if($(this).val().length >= 1){
      $(".year-version").addClass("is_true")
    }else{
      $(".year-version").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='distance']").blur(function(){
    if($(this).val().length >= 1){
      $(".distance").addClass("is_true")
    }else{
      $(".distance").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='color']").blur(function(){
    if($(this).val().length >= 1){
      $(".color").addClass("is_true")
    }else{
      $(".color").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='grade']").blur(function(){
    if($(this).val().length >= 1){
      $(".grade").addClass("is_true")
    }else{
      $(".grade").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='type']").blur(function(){
    if($(this).val().length >= 1){
      $(".type").addClass("is_true")
      $(".maker-txt").css("opacity","0")
    }else{
      $(".type").removeClass("is_true")
      $(".maker-txt").css("opacity","1")
    }
    allChecked();
  });
  $("input[name='maker']").blur(function(){
    if($(this).val().length >= 1){
      $(".maker").addClass("is_true")
      $(".maker-txt").css("opacity","0")
    }else{
      $(".maker").removeClass("is_true")
      $(".maker-txt").css("opacity","1")
    }
    allChecked();
  });
  $("input[name='kana']").blur(function(){
    let Val = $('[name="kana"]').val().length;
    if(Val >= 1 ){
      console.log(Val)
      $(".kana").addClass("is_true")
      $(".kana-txt").css("opacity","0")
    }else{
      $(".kana").removeClass("is_true")
      $(".kana-txt").css("opacity","1")
    }

    allChecked();
    return false;
  });

  $("input[name='mail']").blur(function(){
    if($(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      $(".mail").addClass("is_true")
      $(".mail-txt").css("opacity","0")
    } else if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
    $(".mail").removeClass("is_true")
    $(".mail-txt").css("opacity","1")
    }
    allChecked();
  });

  $("input[name='phone-number']").blur(function(){
    if($(this).val().match(/^[0-9\-]+$/)){
      $(".phone-number").addClass("is_true")
      $(".phone-txt").css("opacity","0")
    } else if(!$(this).val().match(/^[0-9\-]+$/)){
      $(".phone-number").removeClass("is_true")
      $(".phone-txt").css("opacity","1")
    }
    allChecked();
  });

  $("textarea[name='contact-contents']").blur(function(){
    if($(this).val().length >= 1){
      $(".text-area01").addClass("is_true")
      $(".contents-txt").css("opacity","0")
    } else {
      $(".text-area01").removeClass("is_true")
      $(".contents-txt").css("opacity","1")
    }
    allChecked();
  });
  $("textarea[name='contact-contents02']").blur(function(){
    if($(this).val().length >= 1){
      $(".text-area02").addClass("is_true")
    } else {
      $(".text-area02").removeClass("is_true")
    }
    allChecked();
  });

  $('[name=visit-reason]').change(function(){
    let Val = $('[name=visit-reason] option:selected').val();
    $(".line-reason").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=store]').change(function(){
    let Val = $('[name=store] option:selected').val();
    $(".line-store").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=contact-phone-mail]').change(function(){
    let element = $(this)
    if(element.prop('checked',true)){
      $(".radio-box1").removeClass("is_radio_active01");
      element.prev().addClass("is_radio_active01");
      $(".redio-wrapper").css("display","none")
      element.parent().css("display","flex")
      $(".contact-txt").css("opacity","0")
    } else {
      $(".contact-txt").css("opacity","1")
    }
    if (element.val() == "電話"){
      $(".contact-form-title-mail").css("display","none")
      $(".contact-form-title-phone").css("display","block")
      $(".contact-way").css("opacity","0")
      $(".mail-txt").css("display","none")
      $(".phone-txt").css("display","block")
    } else if (element.val() == "メール"){
      $(".contact-form-title-phone").css("display","none")
      $(".contact-form-title-mail").css("display","block")
      $(".contact-way").css("opacity","0")
      $(".phone-txt").css("display","none")
      $(".mail-txt").css("display","block")
    }
    allChecked();
    return false;
  })
  
  $('[name=yes-no]').change(function(){
    let element = $(this)
    if(element.prop('checked',true)){
      $(".radio-box1").removeClass("is_radio_active02");
      element.prev().addClass("is_radio_active02");
      $(".redio-wrapper").css("display","none");
      element.parent().css("display","flex");
    } 
    if (element.val() == "あり"){
      $(".contact-under").css("display","block")
    } else if (element.val() == "なし"){
      $(".contact-under").css("display","none")
    }
    allChecked();
    return false;
  })


  let allChecked = function(){
    let filledKana = $(".kana").hasClass("is_true")
    let filledradio1 = $(".radio-box1").hasClass("is_radio_active01")
    let filledMail = $(".mail").hasClass("is_true")
    let filledphone = $(".phone-number").hasClass("is_true")
    let filledradio2 = $(".radio-box02").hasClass("is_radio_active02")

     console.log(filledradio1)
    if (filledKana && filledradio1 && filledradio2 && (filledMail || filledphone)){
      $(".to-confirmation-page").css("background-color","red")
      $(".error-message").css("display","none")
    } else {
      $(".to-confirmation-page").css("background-color","#fee5eb")
      $(".error-message").css("display","block")
    }
    return false;
  }
 
})