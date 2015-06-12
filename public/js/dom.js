"use strict";
/* global Sizzle */


// TODO remove this when I get Modernizr
var bejerked = {};

bejerked.dom = (function () {
	var $ = Sizzle;

	function hasClass(element, className) {
		var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

		return regex.test(element.className);
	}


	function addClass(element, className) {
		if(! hasClass(element, className)) {
			element.className += " " + className;
		}
	}


	function removeClass(element, className) {
		var regex = new RegExp("((^|\\s)" + className + "(\\s|$))");

		element.className = element.className.replace(regex, "");
	}


	return {
		$: $,
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass
	};
}());
