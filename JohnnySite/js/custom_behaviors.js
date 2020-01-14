$( document ).ready(function() {
	// lockScroll;	

	// $("a").on('tap', function(event) {
	// 	event.preventDefault();
	// 	var destination = $(this).attr('href');
	// 	pageScrollInProgress = true;
	// 	$('html, body').stop().animate({
	// 	  scrollTop: $(destination).offset().top - (-1)
	// 	}, 900, 'easeInOutExpo', function() {
	// 	  pageScrollInProgress = false;
	// 	});	
	//   });

	$('.close').on('tap',function(event){
		event.preventDefault();
		$('#section-b, #section-c').fadeOut();
	});

	$('.edu a').on('tap',function(event){
		event.preventDefault();
		$('#section-b').fadeIn(1000,function(){
			cbpFixedScrollLayout.init();
		});
	});

	$('.art a').on('tap',function(event){
		event.preventDefault();
		$('#section-c').fadeIn(1000,function(){
			cbpFixedScrollLayoutTwo.initTwo();
		});
	});

	$('.about a').on('tap',function(event){
		event.preventDefault();
		$('#section-about').fadeIn(1000);
	});

	$(' .header-wrap > div:nth-of-type(2) > div:nth-of-type(1)').on('tap',function(event){
		event.preventDefault();
		$('#section-about').fadeIn(1000);
	});

	$('.contact a').on('tap',function(event){
		event.preventDefault();
		$('.contact-overlay').fadeIn(500,function(){
			
		});
	});

	$('#section-about .about-button').on('tap',function(event){
		event.preventDefault();
		$('#section-about').fadeOut();
	});

	$('.edu-back-button').on('tap',function(event){
		event.preventDefault();
		$('.content').fadeOut();
	});

	$('#edusection1 a').on('tap',function(event){
		event.preventDefault();
		$('#field-trip').fadeIn(1000);
	});

	$('#edusection2 a').on('tap',function(event){
		event.preventDefault();
		$('#sci-fiction').fadeIn(1000);
	});

	$('#fbsection1 a').on('tap',function(event){
		event.preventDefault();
		$('#threed-art').fadeIn(1000);
	});

	$('#fbsection2 a').on('tap',function(event){
		event.preventDefault();
		$('#sweep').fadeIn(1000);
	});

	$('#fbsection3 a').on('tap',function(event){
		event.preventDefault();
		$('#hugo').fadeIn(1000);
	});

	$('.contact-overlay > .close').on('tap',function(event){
		event.preventDefault();
		$('.contact-overlay').fadeOut();
	});

});


//FUNCTION
// var lockScroll = (function() {
	
// 	// cache and initialize some values, config is a global scope, all the config value will be cached.
// 	var deploy = {
// 		// the cbp-fbscroller's sections
// 		// $sections : $( ' section' ),
// 		// the navigation links
// 		$mainNavlinks : $( ' ul li a' ),
// 		// index of current link / section
// 		currentLocation: $( '.location'),
// 		// the body element
// 		$mainBody : $( 'html, body' ),
// 		// the body animation speed
// 		scrollAnimspeed : 450,
// 		// the body animation easing (jquery easing)
// 		scrollEasing : 'easeInOutExpo'
// 	};

// 	console.log(deploy.currentLocation);

// 	deploy.$mainNavlinks.on( 'click', function() {
// 		deploy.currentLocation = $(this).attr('href');
// 		console.log(deploy.currentLocation);
// 	});

	

// 	$( window ).on( 'debouncedresize', function() {
// 		//scroll current section
// 		var currentLocationLocal = deploy.currentLocation
// 		lockScrollAnim($(currentLocationLocal).offset().top);
// 		console.log(currentLocationLocal);
// 	} );



// 	// function to scroll / animate the body
// 	function lockScrollAnim( top ) {
// 		deploy.$mainBody.stop().animate( { scrollTop : top }, deploy.scrollAnimspeed, deploy.scrollEasing );
// 	}
		

// })();
	
	
