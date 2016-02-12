$(document).ready(function() {

	// top menu
	$(".header a[href*='#']").mPageScroll2id({
		highlightSelector:".nav__link",
		forceSingleHighlight: true
	});

	// $('.nav__link').click(function() {
	// 	return false;
	// });

	// popup
	$('.button_open-popup').magnificPopup({
		type: 'inline',
		midClick: true,
		callbacks: {
			open: function() {
				// Will fire when this exact popup is opened
				// this - is Magnific Popup object
			},
			close: function() {
			  // Will fire when popup is closed

			}
		// e.t.c.
  		}
	});




});
