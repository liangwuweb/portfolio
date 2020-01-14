$(document).ready(function() {

	// VARIABLES


	// EVENT HANDLERS


	$(".fa-plus-circle").on("click",function(event){
		event.preventDefault();
		$(".waterColumn").animate({
			height:"166px"
		},1000,"easeOutExpo");

		$(".waterColumn, .circle").css( "background-color", "rgb(255, 87, 34)");


		// $("section").fadeIn(2000,function(){
		// 	$(this).addClass("warm");
		// })
		$("section").removeClass("cool");

		$("section").addClass("warm");

	})

	$(".fa-minus-circle").on("click",function(event){
		event.preventDefault();
		$(".waterColumn").animate({
			height:"50px"
		},1000,"easeOutExpo")

		$(".waterColumn, .circle").css( "background-color", "rgb(50, 201, 220)");

			$("section").addClass("cool");

	})


$(".fa-power-off").on("click",function(){
	$(".waterColumn").animate({
		height:"90px"
	},1000,"easeOutExpo")

	$(".waterColumn, .circle").css( "background-color", "#8dde2f");

	$("section").removeClass("cool");

	$("section").removeClass("warm");

})

	// FUNCTIONS


	// INITIALIZATION


});
