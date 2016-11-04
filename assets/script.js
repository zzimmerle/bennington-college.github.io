$( document ).ready(function() {

	$('h3').click(
	  function() {
	    $('h3').css('background-color', 'yellow');
	  }
	);
	$('a').click(
	  function() {
	    $('h3').css('display', 'none');
	  }
	);
	$('body').mouseenter(
	  function() {
	    $('body').css('position', 'relative');
	    $('body').css('left', '30px');
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