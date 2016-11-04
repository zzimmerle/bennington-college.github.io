$( document ).ready(function() {

	$('h3').click(
	 if ('background-color' == 'yellow') {
	 	function() {
	  	  $('h3').css('background-color', 'white');
	  	}
	 } 	
	 if ('background-color' == 'white') {
	 	function() {
	  	  $('h3').css('background-color', 'yellow');
	  	}
	 } 	
	);
});


// exercises:
// when you .hover() over 'h3' elements, change 'background-color' to 'yellow'
//
// when you click on an 'a' element, make it disappear: change 'display' to 'none'
//
// when you move the mouse over the 'body' element, shift it to the right:
//		change 'position' to 'relative' and 'left' to '30px'
//