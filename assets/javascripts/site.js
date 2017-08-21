require('jquery');

console.log('Welcome to Caufield Memorials!');

var headerHeight = $(".nav-header").height() + 40;
var height = $( window ).height() - headerHeight;

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= height) {
      $(".index .nav-header").removeClass("partial-fixed");
  } else {
  	$(".index .nav-header").addClass("partial-fixed");
  }
}); 

$(document).ready(function(){
	if ($(window).width() > 900) {
		$(".estimate section").css("min-height",height);
	}else {
		$("body").css("padding-top",headerHeight);
	}
	
	$(".step-2 .product-container").not(".default").hide();	
  $(".selection-container").click(function(){

    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');

  });

  $(".step-1 .selection-container").click(function(){
 	
  	var product = $(this).children('a').attr("href");
  	var headerHeight = 221;

  	$(product).show();
		$(product).siblings("div").hide();

    // $('html, body').animate({
    //   scrollTop: $(product).offset().top - headerHeight
    // }, 500, function() {
    //   // Callback after  animation
    //   // Must change focus!
    //   // var $product = $(product);
    //   // $product.focus();
    //   // if ($product.is(":focus")) { // Checking if the target was focused
    //   //   return false;
    //   // } else {
    //   //   $product.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    //   //   $product.focus(); // Set focus again
    //   // };
    // });

  });

  $(".selection-container").click(function(){

    var fuller = $(this).closest('section').next();
    var headerHeight = 161;

     $('html, body').animate({
      scrollTop: $(fuller).offset().top - headerHeight
    }, 500);

  });

  	var product
  	var size 
  	var color
  	var addOn


});

