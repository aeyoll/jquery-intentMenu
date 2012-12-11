(function($) {
	$.fn.intentMenu = function(d) {
		var cfg = {
			delay: 350
		};
		cfg = $.extend(cfg, {delay: d});
		var showMenu = function() {
			$(this).siblings('li').removeClass('hover');
			$(this).addClass('hover');
		};
		var hideMenu = function() {
			$(this).removeClass('hover');
		}
		var focusMenu = function() {
			var parentsLi = $(this).parents('li');
			parentsLi.each(function(i) {
				focusNb = $(parentsLi[i]).data('focusNb');
				if (!focusNb) {
					focusNb = 1;
				}
				else {
					focusNb++;
				}
				$(parentsLi[i]).data('focusNb', focusNb);
				$(parentsLi[i]).addClass('hover focus');
			});
		};
		var blurMenu = function () {
			var parentsLi = $(this).parents('li');
			parentsLi.each(function(i) {
				focusNb = $(parentsLi[i]).data('focusNb');
				$(parentsLi[i]).data('focusNb', $(parentsLi[i]).data('focusNb')-1);

				setTimeout(function() {
					if ($(parentsLi[i]).data('focusNb') == 0) {
						$(parentsLi[i]).removeClass('hover focus');
					}
				}, 50);
			});
		}
		$('body').removeClass('nojs');

		this.find('li').hoverIntent({
			over: showMenu,
			timeout: cfg.delay,
			out: hideMenu
		});
		this.find('a').focus(focusMenu);
		this.find('a').blur(blurMenu);
	}
})(jQuery);