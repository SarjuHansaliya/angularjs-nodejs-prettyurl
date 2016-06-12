webpackJsonp([2],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	angular.module('prettyUrl')
	    .component('screen2', {
	        template: __webpack_require__(8),
	        controller: Screen2Controller,
	        controllerAs: 'vm'
	    });

	Screen2Controller.$inject = [];
	function Screen2Controller(){
		var vm = this;
	}

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = "<H1>Screen 2</H1>\r\n<a ui-sref=\"screen1\">Go to Screen 1</a>";

/***/ }

});