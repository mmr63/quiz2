(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	


	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit      = $('.submit');
	$timeout   = $('.timeout');
	$getAPI 	= $('.getAPI');

	$mouseover.on('mouseover', function() {
		$('#mouse-over').html('Scrooge McDuck!').show();
		$('#mouse-over').height($('#mouse-over').height() + 50); //assuming this is to repeatedly show it works on every mouse over
	});

	$('#click').click(function() {
		$('#click').replaceWith('Peace Out!');
		$('#click').fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($('#form').find('input[type="text"]').val() !== '') {
			$('#form').find('input').each(function() {
				$('#form').fadeOut('slow');
				
			});
			$('#submit').replaceWith('<h2>Congratulations! You\'ve entered some text!</h2>');
			
		}
	});


	$(document).ready(function() 
	{
		
	});

})(jQuery);
function getAPI()
	{
		document.getElementById("action-button").value="Change It";
		$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=quizData", function( data ) 
		{
			var r = $('<input id="newButton" type="button" value="Keep It"/>');
			$("#getAPI").append(r);
		  	var entry = data.data[Math.floor(Math.random()*data.data.length)];
		  	$("#getAPI").append("<br>" + "<h1>" + entry + "</h1>");
		  	document.getElementById("getAPI").style.backgroundColor = "#c2d6d6";
		  	document.getElementById("getAPI").style.textAlign = "center";
		});
		


	}


