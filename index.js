
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

var navBarPos = $(".navbar").offset().top;
  
  $(window).scroll(function(){

    var scrollP = $(this).scrollTop();
    if (scrollP >= navBarPos) {
      $(".navbar").addClass("sticky");
      $(".navbar").css('opacity', '0.95');

    } else {
      $(".navbar").removeClass("sticky");
      $(".navbar").css('opacity', '1');

    }
  });

// Hamburger Menu from http://codepen.io/g13nn/pen/eHGEF
