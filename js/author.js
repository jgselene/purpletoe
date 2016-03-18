window.open(url,'_blank');
window.open(url);

// $(document).ready(function() {

// 	function link_click(event) {
// 		event.preventDefault();

// 		$('#mainmenu a').removeClass('selected');
// 		$(this).addClass('selected');
// 	}

// 	$('#mainmenu a').click(link_click);


// 	function load_page(path, callback) {

// 		$('#theTarget .nest')
// 			.css({'opacity':'0'})
// 			.load(path, function(){
// 				callback();
// 				$('#theTarget .nest').animate({'opacity':'1'},1000);
// 			});

// 	}
// 	$('#mainmenu a:eq(0)').click(function() { 
// 		load_page('about.html #tabbed', tabme);
// 	});
// 	// Slideshow
// 	$('#mainmenu a:eq(1)').click(function() { 
// 		load_page('1-slideshow.html #slideshow', slideme);
// 	});
// 	// Swap
// 	$('#mainmenu a:eq(2)').click(function() { 
// 		load_page('4-swap.html #box', swapme);
// 	});


// 	/*****************************
// 	// Slideshow
// 	*****************************/
// 	function slideme() {
// 		var slideshow = $('.slideshow');

// 		function slideshow_fade() {
// 			lastimg = slideshow.find('img:last');

// 			lastimg.delay(2000).animate({'opacity':'0'},1000, function(){
// 				lastimg.prependTo(slideshow).css({'opacity':'1'});
// 				slideshow_fade();
// 			});
// 		}

// 		slideshow_fade();
// 	} /*here ends the slideme function*/


// 	/*****************************
// 	// Swap
// 	*****************************/
// 	function swapme() {
// 				var large = $('#box .large img');

// 				$('#box .thumbnails img').mouseover(function(){
// 					var theSrc = $(this).attr('src');
// 					large.attr('src',theSrc);
// 				});
// 			}	


// 	function tabme(){
		
// 			/*-------------------------------------
// 			| hide greater than one sections
// 			---------------------------------------*/
// 			// $('#tabbed section:eq(1).hide();
// 				$('#tabbed section:gt(0)').hide();

// 			/*-------------------------------------
// 			| Tab Link Click
// 			-------------------------------------*/	
// 			function tab_link_click(event) {
// 				//kill the link default
// 				event.preventDefault();

// 				//change chosen one
// 				$('#tabbed nav a').removeClass('chosen');
// 				$(this).addClass('chosen');

// 				//swap sections
// 				var whichSection = $(this).attr('href')
// 				$('#tabbed section').hide();
// 				$(whichSection).show();
// 			}

// 			//add event listener
// 			$('#tabbed nav a').click(tab_link_click);

// 			/*---------------------------------------
// 			| Facebook
// 			---------------------------------------*/
// 			var face_state = 'off';

// 			function face_click() {
// 				if (face_state == 'off')
// 				{
// 					face_state = 'on';
// 					$(this).attr('h2');
// 					$('#face').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#face').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					face_state = 'off';
// 					$(this).attr('h2');
// 					$('#face').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#face').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(face_state);
// 			}

// 			$('#face').find('.object').click(face_click);

// 			/*---------------------------------------
// 			| Instagram
// 			---------------------------------------*/
// 			var insta_state = 'off';

// 			function insta_click() {
// 				if (insta_state == 'off')
// 				{
// 					insta_state = 'on';
// 					$(this).attr('h2');
// 					$('#insta').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#insta').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					insta_state = 'off';
// 					$(this).attr('h2');
// 					$('#insta').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#insta').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(insta_state);
// 			}

// 			$('#insta').find('.object').click(insta_click);

// 			/*---------------------------------------
// 			| Twitter
// 			---------------------------------------*/
// 			var twit_state = 'off';

// 			function twit_click() {
// 				if (twit_state == 'off')
// 				{
// 					twit_state = 'on';
// 					$(this).attr('h2');
// 					$('#twit').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#twit').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					twit_state = 'off';
// 					$(this).attr('h2');
// 					$('#twit').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#twit').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(twit_state);
// 			}

// 			$('#twit').find('.object').click(twit_click);

// 			/*---------------------------------------
// 			| Wix
// 			---------------------------------------*/
// 			var wix_state = 'off';

// 			function wix_click() {
// 				if (wix_state == 'off')
// 				{
// 					wix_state = 'on';
// 					$(this).attr('h2');
// 					$('#wix').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#wix').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					wix_state = 'off';
// 					$(this).attr('h2');
// 					$('#wix').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#wix').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(wix_state);
// 			}

// 			$('#wix').find('.object').click(wix_click);


// 			/*---------------------------------------
// 			| LinkedIn
// 			---------------------------------------*/
// 			var link_state = 'off';

// 			function link_click() {
// 				if (link_state == 'off')
// 				{
// 					link_state = 'on';
// 					$(this).attr('h2');
// 					$('#link').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#link').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					link_state = 'off';
// 					$(this).attr('h2');
// 					$('#link').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#link').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(link_state);
// 			}

// 			$('#link').find('.object').click(link_click);

// 			/*---------------------------------------
// 			| Email
// 			---------------------------------------*/
// 			var mail_state = 'off';

// 			function mail_click() {
// 				if (mail_state == 'off')
// 				{
// 					mail_state = 'on';
// 					$(this).attr('h2');
// 					$('#mail').find('.object .color').animate({'opacity':'1'}, 500);
// 					$('#mail').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					mail_state = 'off';
// 					$(this).attr('h2');
// 					$('#mail').find('.object .color').animate({'opacity':'.5'}, 500);
// 					$('#mail').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(mail_state);
// 			}

// 			$('#mail').find('.object').click(mail_click);

// 			/*---------------------------------------
// 			| Email h3
// 			---------------------------------------*/
// 			var e_state = 'off';

// 			function e_click() {
// 				if (e_state == 'off')
// 				{
// 					e_state = 'on';
// 					$(this).attr('h2');
// 					$('#mail').find('h3').animate({'opacity':'1'}, 500);
// 					// $('#mail').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					e_state = 'off';
// 					$(this).attr('h2');
// 					$('#mail').find('h3').animate({'opacity':'0'}, 500);
// 					// $('#mail').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(e_state);
// 			}

// 			$('#mail').find('.mail').click(e_click);

// 			function light_on() {
// 				var newSrc = $(this).attr('src');

// 				$('#lightbox img').attr('src', newSrc);

// 				$('#lightbox').show();
// 			}

// 			function light_off() {
// 				$('#lightbox').hide();
// 			}

// 			$('#tab1 .gallery img').click(light_on);
// 			$('#lightbox .close').click(light_off);
				
// 	}	

// 	var name_state = 'off';

// 			function name_click() {
// 				if (name_state == 'off')
// 				{
// 					name_state = 'on';
// 					$('#name').find('.object').animate({'left':'650px'}, 500);
// 				}
// 				else
// 				{
// 					name_state = 'off';
// 					$(this).attr('h2');
// 					$('#name').find('.object').animate({'left':'130px'}, 500);
// 				}

// 				console.log(name_state);
// 			}

// 			$('#mail').find('#mainmenu').click(name_click);
// });




