$(window).ready(function() {

  setTimeout(function() {

    $(".main").before('<div class="loadedAnimation"></div>');

    setTimeout(function() {

      $(".loadedAnimation").remove();

    }, 700);

  }, 640);

});
