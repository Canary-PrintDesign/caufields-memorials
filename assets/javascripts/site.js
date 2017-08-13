require('jquery');

console.log('Welcome to Caufield Memorials!');

$(document).ready(function(){
	
  $(".selection-container").click(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');

    var product = $(this).children('a').attr("href");
		$(product).show();

    $('html, body').animate({
      scrollTop: $(product).offset().top
    }, 1000, function() {
      // Callback after  animation
      // Must change focus!
      var $product = $(product);
      $product.focus();
      if ($product.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        $product.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        $product.focus(); // Set focus again
      };
    });
  });

});

