$(".toggle").click(function () {
    $(".container").slideToggle(function () {
      console.log("slide");
      // $(".container").css("display", "flex");
      // $(".container").css("flex-direction", "column");
    });
  });
  
window.addEventListener(
    "resize",
    function (event) {
      if ($("body").outerWidth() >= 700) {
        $(".container").css("display", "flex");
        $(".container").css("flex-direction", "row");
      }
      if ($("body").outerWidth() <= 700) {
        $(".container").css("display", "none");
      }
    },
    true
);