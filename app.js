$(function () {


   // Fixed Header
   {
      let header = $('#header');
      let intro = $('#intro');
      let introH;
      let scrollPos;

      $(window).on('scroll load resize', function () {
         introH = intro.innerHeight();
         scrollPos = $(this).scrollTop();

         if (scrollPos > (introH - 60)) {
            header.addClass("fixed");
         } else {
            header.removeClass("fixed");
         }
      });
   }

   // Smooth scroll
   {
      $("[data-scroll]").on("click", function (event) {
         event.preventDefault();

         let elementId = $(this).data('scroll');
         let elementOffset = $(elementId).offset().top;

         $("#nav").removeClass("show")

         $("html, body").animate({
            scrollTop: elementOffset - 60
         }, 700)
      });
   }

   // Nav Toggle
   let nav = $("#nav");
   let navToggle = $("#navToggle");

   navToggle.on("click", function (event) {
      event.preventDefault();

      nav.toggleClass("show");
   })


   // Reviews https://kenwheeler.github.io/slick/
   let slider = $("#reviewsSlider");

   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
   });
});