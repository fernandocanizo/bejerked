"use strict";


// TODO remove this when I get Modernizr
var bejerked = {};

bejerked.game = (function () {
	// convenience assignments
	var dom = bejerked.dom;
	var $ = dom.$;

	function showScreen(screenId) {
		// hide active screen and show specified screen

		var activeScreen = $('#game .screen .active')[0];
		var screen = $('#' + screenId)[0];

		if(activeScreen) {
			dom.removeClass(activeScreen, "active");
		}

		dom.addClass(screen, "active");
	}


	return {
		showScreen: showScreen
	};

}());
