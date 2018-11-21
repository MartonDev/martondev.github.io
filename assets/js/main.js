$(window).ready(function() {

  setTimeout(function() {

    $(".main").before('<div class="loadedAnimation"></div>');

    setTimeout(function() {

      $(".loadedAnimation").remove();

    }, 700);

  }, 640);

  $.get("https://api.github.com/users/MartonDev/repos", function(data) {

    var projects = "";

    for(i = 0; i < data.length; i++) {

      projects += '<a class="project" target="_blank" href="' + data[i]["html_url"] + '">' + data[i]["name"] + '<p>' + data[i]["description"] + '<br><i class="fas fa-circle"></i> ' + data[i]["language"] + '<span class="seperator"></span><i class="fas fa-star"></i> ' + data[i]["stargazers_count"] + '</p></a>';

    }

    $(".projects").html(projects);

  });

});
