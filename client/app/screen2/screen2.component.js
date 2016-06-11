angular.module('prettyUrl')
    .component('screen2', {
        template: require('./screen2.html'),
        controller: Screen2Controller,
        controllerAs: 'vm'
    });

Screen2Controller.$inject = [];
function Screen2Controller(){
	var vm = this;
}