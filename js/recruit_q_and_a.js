$(function() {
  $(".q-and-a-body__title").click(function(){
    if ($(this).next().children().hasClass("is_answear_active")){
      $(this).next().children().removeClass("is_answear_active")
      $(this).removeClass("is_arrow_rotate")
    } else {
    $(".q-and-a-body__answear-txt").removeClass("is_answear_active")
    $(".q-and-a-body__title").removeClass("is_arrow_rotate")
    $(this).next().children().addClass("is_answear_active")
    $(this).addClass("is_arrow_rotate")
    }
  })
})