$(document).on('click', 'a[href^="#"]', function (event) {

  event.preventDefault();
  scrollTo($($.attr(this, 'href')));

});

function scrollTo(target) {

  $('html, body').animate({

    scrollTop: target.offset().top

  }, 300);

}
