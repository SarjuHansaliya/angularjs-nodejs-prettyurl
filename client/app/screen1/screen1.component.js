angular.module('prettyUrl')
    .component('screen1', {
        template: require('./screen1.html'),
        controller: Screen1Controller,
        controllerAs: 'vm'
    });

Screen1Controller.$inject = [];
function Screen1Controller(){
	var vm = this;
}