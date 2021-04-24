$(function() {
  $("input[name='name-sei']").blur(function(){
    if($(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".sei").addClass("is_true")
    } else if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".sei").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='name-mei']").blur(function(){
    if($(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".mei").addClass("is_true")
    } else if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".mei").removeClass("is_true")
    }
    allChecked();
  });

  $("input[name='kana-sei']").blur(function(){
    if($(this).val().match(/^[ァ-ロワヲンー  \r\n\t]*$/)){
      $(".kana-sei").addClass("is_true")
    }else if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".kana-sei").removeClass("is_true")
    }
    allChecked();
  });
  $("input[name='kana-mei']").blur(function(){
    if($(this).val().match(/^[ァ-ロワヲンー  \r\n\t]*$/)){
      $(".kana-mei").addClass("is_true")
    }else if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 \r\n\t]+$/)){
      $(".kana-mei").removeClass("is_true")
    }
    allChecked();
  });

  $("input[name='mail']").blur(function(){
    if($(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      $(".mail").addClass("is_true")
    } else if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
    $(".mail").removeClass("is_true")
    }
    allChecked();
  });


  $("input[name='phone-number']").blur(function(){
    if($(this).val().match(/^[0-9\-]+$/)){
      $(".phone-number").addClass("is_true")
    } else if(!$(this).val().match(/^[0-9\-]+$/)){
      $(".phone-number").removeClass("is_true")
    }
    allChecked();
  });

  let allChecked = function(){
    let filledMei = $(".mei").hasClass("is_true")
    let filledSei = $(".sei").hasClass("is_true")
    let filledKanaMei = $(".kana-mei").hasClass("is_true")
    let filledKanaSei = $(".kana-sei").hasClass("is_true")
    let filledMail = $(".mail").hasClass("is_true")
    let filledphone = $(".phone-number").hasClass("is_true")
    if (filledMei && filledSei && filledKanaMei && filledKanaSei && filledMail && filledphone ){
      $(".to-confirmation-page").css("background-color","red")
      $(".error-message").css("display","none")
    } else {
      $(".to-confirmation-page").css("background-color","#fee5eb")
      $(".error-message").css("display","block")
    }
    return false;
  }
})