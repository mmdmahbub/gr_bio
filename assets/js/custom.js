//initial script



//Magic Popup Image gallery 
$(document).ready(function(){
	$(".gellary").magnificPopup({
	  type: 'image',
	  gallery: {
		  enabled: true
	  }
  });
  
});

//Sticky navbar script
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
	$('.my_nav').addClass("sticky");
	}
	else{
	$('.my_nav').removeClass("sticky");
	}
});

//Auto active menu item script
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".menu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  // Active menu item based screen area
   $('.menu').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
	
	//Wow Js
	 new WOW().init();
	
	
	
});

