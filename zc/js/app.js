window.onload = getUrlParameter;

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

$(document).ready(function() {
  "use strict";

  var urlParam = getUrlParameter("fp_ref");
  if (urlParam && urlParam.length > 0) {
    $(".ref-btn").each(function() {
      var currentUrl = $(this).attr("href");
      $(this).attr("href", currentUrl + "?fp_ref=" + urlParam);
    });
  }

  // variables
  var $isAnimatedFirst = $("#section1 .is-animated"),
    $isAnimatedSecond = $("#section2 .is-animated"),
    $isAnimatedThird = $("#section3 .is-animated"),
    $isAnimatedFourth = $("#section4 .is-animated"),
    $isAnimatedFifth = $("#section5 .is-animated"),
    $isAnimatedSixth = $("#section6 .is-animated"),
    $isAnimatedSeventh = $("#section7 .is-animated");
  // initialize fullPage
  $("#fullpage").fullpage({
    verticalCentered: false,
    sectionsColor: [
      "transparent",
      "#ffffff",
      "#0084ff",
      "#ffffff",
      "#0084ff",
      "#ffffff",
      "#0084ff",
      "transparent"
    ],
    navigation: true,
    navigationPosition: "right",
    onLeave: function(index, nextIndex, direction) {
      /**
       * use the following condition:
       *
       *   if( index == 1 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur
       * when you jump (using the dot navigation)
       * from the first section to another sections
       */

      // first animation
      if (index == 1 && nextIndex == 2) {
        $isAnimatedFirst
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedFirst
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
        setInterval(animate_next_elem, 2000);
      }

      /**
       * use the following condition:
       *
       *   else if( index == 2 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur
       * when you jump (using the dot navigation) from the first section to the third one
       */

      // second animation
      else if ((index == 1 || index == 2) && nextIndex == 3) {
        $isAnimatedSecond
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedSecond
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }

      /**
       * use the following condition:
       *
       *   else if( index == 3 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur
       * when you jump (using the dot navigation)
       * from the first or second section to the fourth one
       */

      // third animation
      else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
        $isAnimatedThird
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedThird
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }

      /**
       * use the following condition:
       *
       *   else if( index == 4 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur
       * when you jump (using the dot navigation)
       * from the first or second section to the fourth one
       */

      // fourth animation
      else if (
        (index == 1 || index == 2 || index == 3 || index == 4) &&
        nextIndex == 5
      ) {
        $isAnimatedFourth
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedFourth
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }

      // fifth animation
      else if (
        (index == 1 || index == 2 || index == 3 || index == 4 || index == 5) &&
        nextIndex == 6
      ) {
        $isAnimatedFifth
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedFifth
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }

      // sixth animation
      else if (
        (index == 1 ||
          index == 2 ||
          index == 3 ||
          index == 4 ||
          index == 5 ||
          index == 6) &&
        nextIndex == 7
      ) {
        $isAnimatedSixth
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedSixth
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }

      // seventh animation
      else if (
        (index == 1 ||
          index == 2 ||
          index == 3 ||
          index == 4 ||
          index == 5 ||
          index == 6 ||
          index == 7) &&
        nextIndex == 8
      ) {
        $isAnimatedSeventh
          .eq(0)
          .addClass("animated fadeInLeftBig")
          .css("animation-delay", ".3s");
        $isAnimatedSeventh
          .eq(1)
          .addClass("animated fadeInRightBig")
          .css("animation-delay", ".6s");
      }
    }
  });
});
