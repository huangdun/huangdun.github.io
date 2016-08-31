$(document).ready(function(){

	if ('ontouchstart' in document.documentElement) {
		$('html').addClass('touch');
	} else {
		hoverx = 8;

		$('.aboutimage').mouseover(function(event) {
			hoverg = mouseX(event, $(this));
		});

		$('.aboutimage').mousemove(function(event) {
			var x = mouseX(event, $(this));

			if (x > hoverg) {
				hoverx -= 1;
				hoverg = x;
			} else if (x < hoverg) {
				hoverx += 1;
				hoverg = x;
			}

			if (hoverx < 0) {
				hoverx = 0;
			} else if (hoverx > 18) {
				hoverx = 18;
			}

			$(this).css({'background-position': (hoverx * -1 * $(this).width())});
		});

		$(window).resize(function(event) {
			$('.aboutimage').css({'background-position': (hoverx * -1 * $('.aboutimage').width())});
		});
	}

});

function mouseX(event, that) {
	return (Math.floor((event.pageX - that.offset().left) / that.width() * 18)) - 1;
}
