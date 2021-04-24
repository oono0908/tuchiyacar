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

  $('[name=store-name]').change(function(){
    let Val = $('[name=store-name] option:selected').val();
    $(".line-store").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=year]').change(function(){
    let Val = $('[name=year] option:selected').val();
    $(".line-year").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=month]').change(function(){
    let Val = $('[name=month] option:selected').val();
    $(".line-month").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=day]').change(function(){
    let Val = $('[name=day] option:selected').val();
    $(".line-day").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=time]').change(function(){
    let Val = $('[name=time] option:selected').val();
    $(".line-time").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })

  $('[name=reason-check]').change(function(){
    let len = $(".reserve-reason__list input[type='checkbox']:checked").length;
    if (len == 0){
      $(".check-box").removeClass("is_true")
    } else {
      $(".check-box").addClass("is_true")
    }
    
    allChecked();
  })

  $('[name=reason-check]').click(function(){
      $(this).parent().find(".check-box__true").toggleClass("check-box__active");
  })

  $('[name=frequency').change(function(){
    let Val = $('[name=frequency] option:selected').val();
    $(".select-frequency-text").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
    
  })

  $('[name=storebuy').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box1").removeClass("is_none")
      $(this).parent().find(".radio-box1").addClass("is_none")
    } 
    return false;
  })

  $('[name=storebuy2').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box2").removeClass("is_none")
      $(this).parent().find(".radio-box2").addClass("is_none")
    } 
    return false;
  })

  let allChecked = function(){
    let filledMei = $(".mei").hasClass("is_true")
    let filledSei = $(".sei").hasClass("is_true")
    let filledKanaMei = $(".kana-mei").hasClass("is_true")
    let filledKanaSei = $(".kana-sei").hasClass("is_true")
    let filledMail = $(".mail").hasClass("is_true")
    let filledphone = $(".phone-number").hasClass("is_true")
    let filledstore = $(".form-data-select").hasClass("is_true")
    let filledyear = $(".year").hasClass("is_true")
    let filledmonth = $(".month").hasClass("is_true")
    let filledday = $(".date").hasClass("is_true")
    let filledtime = $(".time").hasClass("is_true")
    let filledfrequency = $(".select-frequency").hasClass("is_true")

    if (filledMei && filledSei && filledKanaMei && filledKanaSei && filledMail && filledphone && filledstore && filledyear && filledmonth && filledday && filledtime && filledfrequency){
      $(".to-confirmation-page").css("background-color","red")
      $(".error-message").css("display","none")
    } else {
      $(".to-confirmation-page").css("background-color","#fee5eb")
      $(".error-message").css("display","block")
    }
    return false;
  }

})