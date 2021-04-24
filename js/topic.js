$(function() {
  let toyota01 = $(".toyota01").offset().top -100
  let toyota02 = $(".toyota02").offset().top -100
  let suzuki = $(".suzuki").offset().top -100
  let point = $(".point").offset().top -100

  const carInfo = [
    {class: ".btn-for-toyota01", list:toyota01},
    {class: ".btn-for-toyota02", list:toyota02},
    {class: ".btn-for-suzuki", list:suzuki},
    {class: ".btn-for-point", list:point},
  ]


  $.each(carInfo, function(index, value){
  $("" + value.class).click(function(){
    let speed = 600;
  $("html").animate({scrollTop:value.list},speed);
})
  })
})