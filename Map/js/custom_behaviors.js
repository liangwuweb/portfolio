$(document).ready(function() {

	// VARIABLES
	var $toggleButton = $('.toggle-button'),
			$menuWrap = $('.pusher'),
			$sidebarArrow = $('.sidebar-menu-arrow');

	var locationOneValue = "0";
	var locationTwoValue = "0";
	var locationOnePreviousValue = "0"
	var locationTwoPreviousValue = "0"

	var audio = $("#sound")[0];

	// EVENT HANDLERS
	$toggleButton.on('click', function() {
	$(this).toggleClass('button-open');
	$menuWrap.toggleClass('menu-show');
	$('.main-canvas').toggleClass('menu-open');
	audio.play();

	// $('.box').toggleClass('change');
});

function triggerSelectChange(object) {
    // console.log(object);
    if ($(object).html() == "Select") {
      // do nothing
      //console.log("do nothing");
    } else {
      //console.log("a or b or c");
      $(object).siblings("select").change();
    }
  }


  $("#locationOne").change(function() {
    // console.log($("#locationOne").val())
    // console.log($("#locationTwo").val())

    // fun();
    locationOneValue = $(this).children("option:checked").val()
    checkSelectValues();
    //console.log("hello");
    //console.log($(this).children("option:checked").val());

  }); //why this work now?

  $("#locationTwo").change(function() {
    // fun();
    locationTwoValue = $(this).children("option:checked").val()
    checkSelectValues()
    //console.log("hello");
    //console.log($(this).children("option:checked").val());
  });

  function checkSelectValues() {

    if (locationOneValue != locationTwoValue) {

      if (locationOneValue != "0" && locationTwoValue != "0") {
    $('.point-a, .point-b, .pointA, .pointB').removeClass('hide');
        console.log(locationOneValue)
        console.log(locationTwoValue)
        console.log("show dots");
        console.log(locationOnePreviousValue)
      }

    } else {

      console.log(locationOnePreviousValue)
      console.log(locationTwoPreviousValue)
      console.log(locationOneValue)
      console.log(locationTwoValue)
      // locationOnePreviousValue = locationOneValue
      // locationTwoPreviousValue = locationTwoValue


      if (locationOneValue != locationOnePreviousValue || locationTwoValue != locationTwoPreviousValue) {

				// console.log(locationOnePreviousValue)
				// console.log(locationTwoPreviousValue)
				// console.log(locationOneValue)
				// console.log(locationTwoValue)
				locationOnePreviousValue = locationOneValue
				locationTwoPreviousValue = locationTwoValue

				if (locationOneValue == locationOnePreviousValue || locationTwoValue == locationTwoPreviousValue ) {
						alert("Please input valid location!")
						$('.point-a, .point-b').addClass('hide');
						$('#routeOne, #routeTwo, #routeThree').css('display','none');
				}
      }
    }
  }



$('.button-a').click(function(event) {
	event.preventDefault()
	if ($('.point-a').css('display') === 'block' ) {
		$('#routeTwo, #routeThree, #routeFour').css('display','none');
	$('#routeOne').css('display','block');

	$(".dis-data-2, .time-data-2, .carbon-data-2, .dis-data-3, .time-data-3, .carbon-data-3 ,.dis-data-4, .time-data-4, .carbon-data-4").css('display','none');
	$(".dis-data, .time-data, .carbon-data").css('display','block');
	$('.pic, #line-1').css('display','block');
	$('#line-2, #line-3, #line-4').css('display','none');

	}

		$('.button-b, .button-c, .button-d').removeClass("selected");
		$(this).addClass( "selected" );
});

$('.button-b').click(function(event) {
	event.preventDefault();
		if ($('.point-a').css('display') === 'block' ){
				$('#routeTwo').css('display','block');
				$('#routeOne, #routeThree, #routeFour').css('display','none');
				$(".dis-data, .time-data, .carbon-data, .dis-data-3, .time-data-3, .carbon-data-3,.dis-data-4, .time-data-4, .carbon-data-4").css('display','none');
				$(".dis-data-2, .time-data-2, .carbon-data-2").css('display','block');
				$('#line-1, #line-3, #line-4').css('display','none');
				$('.pic, #line-2').css('display','block');
		}
		$('.button-a, .button-c, .button-d').removeClass("selected");
		$(this).addClass( "selected" );
	});


$('.button-c').click(function(event) {
	event.preventDefault();
		if ($('.point-a').css('display') === 'block' ){
			$('#routeOne, #routeTwo, #routeFour').css('display','none');
			$('#routeThree').css('display','block');
			$(".dis-data, .time-data, .carbon-data, .dis-data-2, .time-data-2, .carbon-data-2,.dis-data-4, .time-data-4, .carbon-data-4").css('display','none');
			$(".dis-data-3, .time-data-3, .carbon-data-3").css('display','block');
			$('#line-1, #line-2, #line-4').css('display','none');
			$('.pic, #line-3').css('display','block');
		}
	$('.button-a, .button-b, .button-d').removeClass("selected");
	$(this).addClass( "selected" );

});

$('.button-d').click(function(event) {
	event.preventDefault();
		if ($('.point-a').css('display') === 'block' ){
			$('#routeOne, #routeTwo, #routeThree').css('display','none');
			$('#routeFour').css('display','block');
			$(".dis-data, .time-data, .carbon-data, .dis-data-2, .time-data-2, .carbon-data-2,.dis-data-3, .time-data-3, .carbon-data-3").css('display','none');
			$(".dis-data-4, .time-data-4, .carbon-data-4").css('display','block');
			$('#line-1, #line-2, #line-3').css('display','none');
			$('.pic, #line-4').css('display','block');
		}
		$('.button-a, .button-b, .button-c').removeClass("selected");
	$(this).addClass( "selected" );

});

$("input[type='checkbox'][name='switch-1']").change(function(event){
	event.preventDefault();
	if($(this).is(':checked')){
			$(".img2").css('display','block').animate({
				opacity:'1'
			},500)
	} else {
		$(".img2").animate({
			opacity:'0'
		},500,function(){
			$(".img2").css('display','none')
		});
	}
});

$("input[type='checkbox'][name='switch-2']").change(function(event){
	event.preventDefault();
	if($(this).is(':checked')){
			$(".bike-station").css('display','block').animate({
				opacity:'1'
			},500)
	} else {
		$(".bike-station").animate({
			opacity:'0'
		},500,function(){
			$(".bike-station").css('display','none')
		});
	}
});


// $("input[type='checkbox'][name='switch-1']").change(function(event){
// 	event.preventDefault();
// 	if($(this).prop('checked', true)){
// 		$(".box").css('display','block');
// 	}
// 	else if ($(this).prop('checked', false)) {
// 		$(".box").css('display','none');
// 	}
// });



//CUSTOM SELECT
	var x, i, j, selElmnt, a, b, c;

	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");

	for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];

	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);

	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {

	/*for each option in the original select element,
	create a new DIV that will act as an option item:*/
	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {

			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var i, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					break;
				}
			}
			h.click();
	});
	b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {

		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
		triggerSelectChange(this);
	});

	// function triggerSelectChange(object) {
	// 	console.log(object);
	// 	if($(object).html() == "Select"){
	// 		// do nothing
	// 		console.log("do nothing");
	// 	} else {
	// 		console.log("a or b or c");
	// 		$(object).siblings("select").change(); //does this change has relation with the change below? What does this change do? 	$(object).siblings("select") is the element been changed. I understand this part, do not quite understand the connection between this part and below part.
	// 	}
	// }


	// $("#locationOne").change(function() {
	//
	// 	// fun();
	// 	console.log("hello");
	// 	console.log($(this).children("option:checked").val());
	// }); //why this work now?

	}

	function closeAllSelect(elmnt) {

	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
	if (elmnt == y[i]) {
		arrNo.push(i)
	} else {
		y[i].classList.remove("select-arrow-active");
	}
	}
	for (i = 0; i < x.length; i++) {
	if (arrNo.indexOf(i)) {
		x[i].classList.add("select-hide");
	}
	}
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);

	// FUNCTIONS
	function fun()
	{
	 var ddl = document.getElementById("locationOne");
	 var ddt = document.getElementById("locationTwo");
	 var selectedValue1 = ddl.options[ddl.selectedIndex].value;
	 var selectedValue2 = ddt.options[ddt.selectedIndex].value;
	    if (selectedValue1 == "A" && selectedValue2 == "B")
	   {
	    // alert("Please select a card type");
			$('.point-a, .point-b, .pointA, .pointB').removeClass('hide');

		} else if (selectedValue1 == "B"  && selectedValue2 == "A"){
			// alert("hello!");
			$('.point-a, .point-b, .pointA, .pointB').removeClass('hide');
		}else if (selectedValue1 == "B" || "A"  && selectedValue2 == "A" || "B"){
			alert("Enter a valid location!");
			$('.point-a, .point-b').addClass('hide');
			$('#routeOne, #routeTwo, #routeThree').css('display','none');
		}
	}

	// INITIALIZATION

});
