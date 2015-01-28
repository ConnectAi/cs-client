window.CS = (function() {
	"use strict";

	var CS = {

		init: function(data) {
			// TODO: I hate this. I'm just doing something close to the existing API for now
			for (var key in data) {
				CS[key] = data[key];
			}
		}

	};

	return CS;
})();
