$(window).on('load', function () {
   $('.preloader').removeClass('active');
   
   $(".slider").slick({
      dots: true,
      arrows: false,
   });
 

});

$(document).ready(function () {

   $(".open-menu-js").on("click", function () {
      $hidden_menu = $(".toggle-js");
      $hidden_menu.toggleClass("active");
   })



})