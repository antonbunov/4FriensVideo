$(document).ready(function(){
  $('.header__menu-btn').click(function(){
    $('.menu').toggleClass('open');
  });
  $('.menu__header-close').click(function(){
    $('.menu').removeClass('open');
  });
});