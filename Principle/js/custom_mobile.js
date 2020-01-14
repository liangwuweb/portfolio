$(document).ready(function() {

  $('.sandwich-bar').on('tap',function(event){
    event.preventDefault();
    if($("#nav").is(":visible")){
       $("#nav").fadeOut(500);
    } else {
      $("#nav").fadeIn(500);
    }
  });

  $(".nav-item").on('tap', function(event) {
    event.preventDefault();
    var destination = $(this).attr('href');
    pageScrollInProgress = true;
    $('html, body').stop().animate({
      scrollTop: $(destination).offset().top - (-1)
    }, 900, 'easeInOutExpo', function() {
      pageScrollInProgress = false;
    });

    if ($(window).width() < 768) {
      $("#nav").css("display", "none");
    }
  });

  $(window).resize(function() {
    if ($(window).width() >= 768) {
      $("#nav").css("display", "block");
    } else {
      $("#nav").css("display", "none")
    }
  });
});
