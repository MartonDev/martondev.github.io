jQuery(function($) {

  $(document).ready(function() {

    Waves.attach(".waves");
    Waves.init();

    $("#home").fadeIn();

    $(".menu span.marker").css({

      "left": parseInt($(".menu .active").css("padding-left"), 10) / 2 + ($(".menu .active").offset().left - $(".menu").offset().left),
      "width": $(".menu .active").width() + parseInt($(".menu .active").css("padding-left"), 10) / 2 + parseInt($(".menu .active").css("padding-right"), 10) / 2

    });

    $(".menu a").click(function() {

      $(".menu a").removeClass("active");
      $(this).addClass("active");

      $(".menu span.marker").css({

        "left": parseInt($(this).css("padding-left"), 10) / 2 + ($(this).offset().left - $(".menu").offset().left),
        "width": $(this).width() + parseInt($(this).css("padding-left"), 10) / 2 + parseInt($(this).css("padding-right"), 10) / 2

      });

      var newSection = $(this).attr("section");

      $(".section.active").fadeOut("fast", function() {

        $(this).removeClass("active");
        $(newSection).addClass("active");
        $(newSection).fadeIn();

      });

    });

    $.get("https://api.github.com/users/MartonDev/repos", function(data) {

      for(i = 0; i < data.length; i++) {

        $("#projects").append('<a class="project" target="_blank" href="' + data[i]["html_url"] + '">' + data[i]["name"] + '<p>' + data[i]["description"] + '<br><i class="material-icons">language</i> ' + data[i]["language"] + '<br><i class="material-icons">star</i> ' + data[i]["stargazers_count"] + '</p></a>');

      }

    });

  });

});
