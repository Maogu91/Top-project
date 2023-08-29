$(window).scroll(function() {
  $('section').each(function(i) {
    if ($(this).position().top <= $(window).scrollTop()) {
      $('body').css('background-color', $(this).attr('data-color'));
    }
  });
});
