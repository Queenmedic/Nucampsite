$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

// Reserve Campsite Modal
$(document).ready(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('hide');
    });
});

$(document).ready(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal('hide');
    });
});