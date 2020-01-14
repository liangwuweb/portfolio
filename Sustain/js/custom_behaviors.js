$(document).ready(function() {

	// VARIABLES
	var
	step1,
	step2,
	step3,
	step4,
	checkedAnswer,
	totalAnswer,
	checkedAnswerNumber,
	percent,
	correct,
 	secondAnwser,
 	thirdAnwser,
  firstAnwser,
	fourthAnwser;



	// EVENT HANDLERS
	$('.buttonOne').on('click',function(event){
	event.preventDefault();
		// $('.pic').fadeOut(100);
		setTimeout(function(){
				$('#step0').addClass('animation-down');

		},500);
		setTimeout(function(){
			$('.head').css('display','block');
			$('.head').addClass('head-in');
			// $('#step0').css('display','none');
		},1300);
	setTimeout(function() {
			$('#step1').css('display','block').addClass('animation-in');
		}, 1800);
	});

	$("#step1 input[type='radio']").change (function(event){
	event.preventDefault();
		$('#step1').css('left','0').removeClass('animation-in').addClass('animation-out');
		tracker()
		setTimeout(function() {
				$('#step2').addClass('animation-in');

			}, 800);
			firstAnwser=$("input[type='radio'][name='match']:checked").val()
			console.log(firstAnwser);
	});

	$("#step2 input[type='radio'][name='city']").change( function(event){
	event.preventDefault();
		$('#step2').css('left','0').removeClass('animation-in').addClass('animation-out');
		tracker()
		setTimeout(function() {
				$('#step3').addClass('animation-in');

		}, 800);
		secondAnwser=$("input[type='radio'][name='city']:checked").val()
		console.log(secondAnwser);
	});

	$("#step3 input[type='radio'][name='matter']").change( function(event){
	event.preventDefault();
		$('#step3').css('left','0').removeClass('animation-in').addClass('animation-out');
		tracker()
		setTimeout(function() {
				$('#step4').addClass('animation-in');

		}, 800);
		thirdAnwser=$("input[type='radio'][name='matter']:checked").val()
		console.log(thirdAnwser);
	});

	$("#step4 input[type='radio'][name='choice']").change( function(event){
	event.preventDefault();
		$('#step4').css('left','0').removeClass('animation-in').addClass('animation-out');
		tracker();
		setTimeout(function() {
				$('#final').addClass('animation-in');

		}, 800);
		fourthAnwser=$("input[type='radio'][name='choice']:checked").val()
		console.log(fourthAnwser);
		checkData();
		evaluate();

	});

	$('.reset').on('click',function(event){
		event.preventDefault();
		$('#final').css('left','0').removeClass('animation-in').addClass('animation-out');
		setTimeout(function(){
				$('.head').addClass('head-out');
		},800);
		setTimeout(function(){
					$('#step0').css('bottom','-100vh').removeClass('animation-down').addClass('animation-up');
		},800);
		setTimeout(function(){
			window.location.reload()
		},1800);
	})



	// FUNCTIONS
	function tracker(){
	 checkedAnswer = $("input[type='radio']:checked")
		totalAnswer = 4
		checkedAnswerNumber = checkedAnswer.length
		console.log(checkedAnswerNumber);
		percent = (checkedAnswerNumber/totalAnswer)*100
		$('.step-bar').animate({
			'width':percent + '%'
		},800,'easeInOutExpo');
	}//don't use for loop becasue it will excuted several times



	function checkData(){
		correct=0
		if (firstAnwser=="chn"){
			console.log("hit 1")
			correct++
		};

		if (secondAnwser=="chicago") {
			console.log("hit 2")
			correct++
		};

		if (thirdAnwser=="fourty") {
			console.log("hit 3")
				correct++

		};

		if (fourthAnwser=="ture") {
			console.log("hit 4")
				correct++
		};
		$(".sign").html(correct)
	}

	function evaluate(){
		if (correct == 0) {
			$('.duck').css('display','block');
			$('.honor').html("I don't know.")
			$('.level').css('top','100%');
		}
		else if (correct < 3) {
			$('.duck').css('display','block');
			$('.honor').html("I don't know.")
			$('.level').animate({
				top:'70%'
			},800,'easeInOutExpo');
		} else if (correct == 3){
			$('.duck2').css('display','block');
			$('.honor').html("I know it!");
			$('.level').animate({
				top:'25%'
			},800,'easeInOutExpo');
		} else if (correct == 4 && correct > 3 ) {
			console.log("hello!");
			$('.duck3').css('display','block');
					$('.honor').html("So easy.");
					$('.level').animate({
						top:'0%'
					},800,'easeInOutExpo');
		}
	}



	function  initialize(){

	}





	// INITIALIZATION
	  initialize();
});
