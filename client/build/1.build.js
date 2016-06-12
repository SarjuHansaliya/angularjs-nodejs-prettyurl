webpackJsonp([1],{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	angular.module('prettyUrl')
	    .component('screen1', {
	        template: __webpack_require__(6),
	        controller: Screen1Controller,
	        controllerAs: 'vm'
	    });

	Screen1Controller.$inject = [];
	function Screen1Controller(){
		var vm = this;
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = "<H1>Screen 1</H1>\r\n<a ui-sref=\"screen2\">Go to Screen 2</a>";

/***/ }

});