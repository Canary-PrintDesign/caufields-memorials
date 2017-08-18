require('jquery');

console.log('Welcome to Caufield Memorials!');

$(document).ready(function(){
	if ($(window).width() > 900) {
   	var height = $( window ).height() - 151;
		$(".estimate section").css("min-height",height);
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

