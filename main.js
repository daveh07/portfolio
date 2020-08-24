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

});
