$(document).ready(function() {

/*-------------------------------------
|Pinned Navigation
-------------------------------------*/
var pin_state = 'scroll';

var nav_height = 70;
var main_offset = $('#main').offset().top;
var nav_offset = main_offset - nav_height;



function pinned_nav() {
	// how far scrolled from top
	var howFar = $(window).scrollTop();

	// console.log('Nav Offset:' + nav_offset);
	// console.log('Dist Scrolled:' + howFar);

	if (howFar >= nav_offset)
	{
		pin_state = 'pinned';
		$('body').addClass('pinned');
	}
	else
	{
		pin_state = 'scrolled';
		$('body').removeClass('pinned'); 
	}	
}

$(window).scroll(pinned_nav);

/*-------------------------------------
| Chosen One State
-------------------------------------*/
function chosen_one() {
	var sect1_top = $('#sect1').offset().top;
	var sect2_top = $('#sect2').offset().top;
	var sect3_top = $('#sect3').offset().top;
	var sect4_top = $('#sect4').offset().top;
	var sect5_top = $('#sect5').offset().top;

	// how far scrolled from top
	var howFar = $(window).scrollTop();

	$('#mainmenu a').removeClass('chosen'); //blanket removal

	if (howFar < sect2_top)
	{
		$('#mainmenu a:eq(0)').addClass('chosen');
	}
	else if (howFar >= sect2_top && howFar < sect3_top)
	{
		$('#mainmenu a:eq(1)').addClass('chosen');	
	}
	else if (howFar >= sect3_top && howFar < sect4_top)	
	{
		$('#mainmenu a:eq(2)').addClass('chosen');
	}
	else if (howFar >= sect4_top && howFar < sect5_top)	
	{
		$('#mainmenu a:eq(3)').addClass('chosen');
	}
	else if (howFar >= sect5_top)	
	{
		$('#mainmenu a:eq(4)').addClass('chosen');
	}	
}

$(window).scroll(chosen_one);
$(window).resize(chosen_one);


/*-------------------------------------
| Animated Scroll
-------------------------------------*/
function animate_scroll(event) {
	event.preventDefault(); //thanks we will take it from here.

	//determine section
	var whichSect = $(this).attr('href');

	// get offsets of our destinations
	var scroll_destination = $(whichSect).offset().top - nav_height;

	// scroll window, have to use html and body for widest browser reach
	$('html, body').animate({scrollTop : scroll_destination}, 1000);
}

$('#mainmenu a').click(animate_scroll);


 }); /*here end doc ready*/