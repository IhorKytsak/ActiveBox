$(function () {
   let header = $('#header');
   let intro = $('#intro');
   let introH;
   let scrollPos;

   $(window).on('scroll load resize', function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      if (scrollPos > introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
<<<<<<< HEAD
   });
=======

   })



   header.addClass('fixed');
>>>>>>> 09ccd7acd53e75db9f213ec50a1ca3a7dac2fa01
});