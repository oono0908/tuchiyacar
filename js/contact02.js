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


  $("input[name='zip11']").blur(function(){
    if(!$(this).val().length == 0){
      $(".mail").addClass("is_true")
    } else {
    $(".mail").removeClass("is_true")
    }
    allChecked();
  });


  $('[name=birth-year]').change(function(){
    let Val = $('[name=birth-year] option:selected').val();
    $(".line-year").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=birth-month]').change(function(){
    let Val = $('[name=birth-month] option:selected').val();
    $(".line-month").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })
  $('[name=birth-day]').change(function(){
    let Val = $('[name=birth-day] option:selected').val();
    $(".line-day").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
  })

  $('[name=desiredJob]').change(function(){
    let Val = $('[name=desiredJob] option:selected').val();
    $(".select-frequency-text").text(Val)
    if($(this).prop('checked',true)){
      $(this).parent().addClass("is_true")
    } else {
      $(this).parent().removeClass("is_true")
    }
    allChecked();
    
  })

  $('[name=gender').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box1").removeClass("is_none")
      $(this).parent().find(".radio-box1").addClass("is_none")
    } 
    return false;
  })

  $('[name=marriage').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box2").removeClass("is_none")
      $(this).parent().find(".radio-box2").addClass("is_none")
    } 
    return false;
  })

  $('[name=experience').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box3").removeClass("is_none")
      $(this).parent().find(".radio-box3").addClass("is_none")
    } 

    if($(this).hasClass("yes-experience")){
      $(".background").css("display","none")
      $(".job-experience").css("display","block")
    } else if ($(this).hasClass("no-experience")){
      $(".job-experience").css("display","none")
      $(".background").css("display","block")
    }
    
    return false;
  })

  $('[name=jobChange').change(function(){
    if($(this).prop('checked',true)){
      $(".radio-box4").removeClass("is_none")
      $(this).parent().find(".radio-box4").addClass("is_none")
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
    let filledyear = $(".birth-year").hasClass("is_true")
    let filledmonth = $(".birth-month").hasClass("is_true")
    let filledday = $(".birth-date").hasClass("is_true")
    let filledaddress = $(".form-data-text").hasClass("is_true")
    let filledgenderman = $(".box-man").prop('checked',true)
    let filledgenderwoman = $(".box-woman").prop('checked',true)
    if (filledMei && filledSei && filledKanaMei && filledKanaSei && filledMail && filledphone && filledstore && filledyear && filledmonth && filledday && filledaddress && filledgenderman || filledgenderwoman ){
      $(".to-confirmation-page").css("background-color","red")
      $(".error-message").css("display","none")
    } else {
      $(".to-confirmation-page").css("background-color","#fee5eb")
      $(".error-message").css("display","block")
    }
    return false;
  }

})