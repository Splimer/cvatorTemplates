$(document).ready(function(){


// ================================= INDEX-HOME =======================================
// ================================= INDEX-HOME =======================================

$(".dropdown-1").hover(function() {
  $('.drop-1').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
});
$(".dropdown-1").mouseleave(function() {
  $('.drop-1').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
});

$(".dropdown-2").hover(function() {
  $('.drop-2').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
});
$(".dropdown-2").mouseleave(function() {
  $('.drop-2').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
});

$(".dropdown-5").hover(function() {
  $('.drop-5').addClass('display-on');
  $('.homeheader').addClass('homeheader--border');
});
$(".dropdown-5").mouseleave(function() {
  $('.drop-5').removeClass('display-on');
  $('.homeheader').removeClass('homeheader--border');
});

$('.item-builders').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-builders').slideToggle()
})
$('.item-resume').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-resume').slideToggle()
})
$('.item-career').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('mainburger__li-item--show')
  $('.content-career').slideToggle()
})


$('.homemain__heading-catitem').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('catitem--active')
})

$('.main__exit-box').on('click', function (e) {
  e.preventDefault()
  $('.mainburger__menu').toggleClass('mainburger__menu--active')
})


console.log('123')

});