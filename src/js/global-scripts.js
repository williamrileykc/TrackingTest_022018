(function($) {

	var main = {

		initialize: function () {
			main.refreshListeners();
		},
		addListeners: function() {
			$('.buttons > a').on('click', main.frameSwap);
			$('#test').on('click', main.handleOutboundLinkClicks);
		},
		removeListeners: function() {
			$('.buttons > a').off('click', main.frameSwap);
			$('#test').off('click', main.handleOutboundLinkClicks);
		},
		refreshListeners: function() {
			main.removeListeners();
			main.addListeners();
		},
		frameSwap: function(e) {
			var el = $(this),
			target = $(this).parent('.buttons').data('target');
			$('.frame').removeClass('active');
			$('#'+target).addClass('active');
			e.preventDefault();
		},
		handleOutboundLinkClicks: function(event) {
			alert('test');
			ga('send', 'event', {
				eventCategory: 'Outbound Link',
				eventAction: 'click',
				eventLabel: 'label'
			});
		}
	};

	$(document).ready(main.initialize);
}(jQuery));