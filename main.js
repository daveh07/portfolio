$(document).ready(function () {

  $("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
  });

  $('#up').on('click', function() {
    $('html, body').animate(keyframes: {
      scrollTop: 0
    }, options:2000);
  });

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});
