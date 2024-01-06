 $(document).ready(function () {

  var element = $(".btn").html();
  //aparecer hero-elements
  $(".hero-element").css("opacity", "1");
  $(".hero-element").addClass("animate__animated animate__zoomIn");
  // opacidad 0 en elementos sobre mi
  $(".sobreMi-element").css("opacity", "0");

  //animacion de navbar

  var clientHeight = parseInt($("#navbar").innerHeight());
  var offset = parseInt($("#sobreMi").offset().top);

  function toggleNavbarClass(){
    if (window.scrollY >= offset - clientHeight)
    {
    $("#navbar").addClass("bg-dark");
    $(".logo").css("width", "80px");
    }

  else
    {
    $("#navbar").removeClass("bg-dark");
    $(".logo").css("width", "100px");
    }
  };

  $(".btn").waypoint(function(){
    $(".sobreMi-element").css("opacity", "1");
  })

  $(".waypoint-1").waypoint(function(){
    $(".card-1").addClass("animate__animated animate__fadeInLeftBig");
    $(".card-2").addClass("animate__animated animate__fadeInUpBig");
    $(".card-3").addClass("animate__animated animate__fadeInRightBig");
    $(".card").css("opacity", "1");
  })

  
  $(window).scroll(toggleNavbarClass);
  toggleNavbarClass();
});


