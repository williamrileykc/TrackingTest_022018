(function($) {

	var main = {

		initialize: function () {
			main.refreshListeners();
		},
		addListeners: function() {
			$('.buttons > a').on('click', main.frameSwap);
		},
		removeListeners: function() {
			$('.buttons > a').off('click', main.frameSwap);
		},
		refreshListeners: function() {
			main.removeListeners();
			main.addListeners();
		},
		frameSwap: function() {
			var el = $(this),
				target = $(this).parent('.buttons').data('target');
			$('.frame').removeClass('active');
			$('#'+target).addClass('active');
		}
	};

	$(document).ready(main.initialize);
}(jQuery));