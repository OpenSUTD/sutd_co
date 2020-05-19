/*!
This is where you'll write your scripts but in jQuery.
I think it's probably not good prog practice to have both jQuery and javascript (inside index.html) even though afaik both are the same,
  but for organising, I'm placing general page behaviour here, while the index.html javascripts are purely for the highlights modals
 */

$(function () {
  "use strict"; // Start of use strict

  // this function controls the sidebar menu button
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    //if active, it means the sidebar menu is open
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    $(this).toggleClass("active");
    //if sidebar menu is open, display the black veil. else, close it.
    if ($("#sidebar-wrapper").attr("class") == "active") {
      $("#menuModal").css("display", "block");
    } else {
      $("#menuModal").css("display", "none");
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes sidebar menu when a scroll trigger link is clicked
  $("#sidebar-wrapper .js-scroll-trigger").click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    $("#menuModal").css("display", "none");
  });

  // this is the scroll-to-top button on the bottom right-hand corner
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  //this is written by me. added the functionality where if you click outside of the sidebar menu, it will close as well
  $("#menuModal").click(function (e) {
    var hold = $("#sidebar-wrapper");
    if (hold.attr("class") == "active" && !hold.is(e.target)) {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      );
      $("#menuModal").css("display", "none");
      /*hiding the black veil as well*/
    }
  });
})(jQuery); // End of use strict

var onMapMouseleaveHandler = function (e) {
  var a = $(this);
  a.on("click", onMapClickHandler);
  a.off("mouseleave", onMapMouseleaveHandler);
  a.find("iframe").css("pointer-events", "none");
};

var onMapClickHandler = function (e) {
  var a = $(this);
  a.off("click", onMapClickHandler);
  a.find("iframe").css("pointer-events", "auto");
  a.on("mouseleave", onMapMouseleaveHandler);
};
$(".map").on("click", onMapClickHandler);
