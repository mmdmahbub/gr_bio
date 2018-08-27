//initial script
$(document).ready(function(){
	//Nav toggle
	$(".mobile_nav i").click(function(){$(".mynav").toggleClass("show");});
	//Search toggle
	$("#search").click(function(){$(".search_bar").addClass("show_the_search");});
	$("#remove_search").click(function(){$(".search_bar").removeClass("show_the_search");});
	
	
	//Wow Js
	 new WOW().init();
});

//Owl Carousel script
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		rtl:true,
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	})
});


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
	$('.navigation').addClass("sticky");
	}
	else{
	$('.navigation').removeClass("sticky");
	}
});

//Auto active menu item script
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".slide_menu a").on('click', function(event) {
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
});


//Rcoket Scroll Top Script
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,  
            easing: 'linear'
        });
    
    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});
$(document).ready(function(){
  $('.port_nav li').click(function(){
    $('.port_nav li').removeClass("active");
    $(this).addClass("active");
});
});
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});