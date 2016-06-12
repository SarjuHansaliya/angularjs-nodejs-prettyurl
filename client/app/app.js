require('angular');
require('angular-ui-router');
require('oclazyload');
var app = angular.module('prettyUrl',[
		'ui.router',
		'oc.lazyLoad',
	]);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
	$stateProvider
		.state('screen1',{
			url : '/screen1',
			template: "<screen1></screen1>",
			resolve : {
				load : ['$q','$ocLazyLoad',function($q,$ocLazyLoad) {
					var defer = $q.defer();
					$ocLazyLoad.toggleWatch(true);
					require(['Screen1Component'],function(){
						$ocLazyLoad.inject();
						$ocLazyLoad.toggleWatch(false);
						defer.resolve();
					})
					return defer.promise;
				}]
			}
		})
		.state('screen2',{
			url : '/screen2',
			template: "<screen2></screen2>",
			resolve : {
				load : ['$q','$ocLazyLoad',function($q,$ocLazyLoad) {
					var defer = $q.defer();
					$ocLazyLoad.toggleWatch(true);
					require(['Screen2Component'],function(){
						$ocLazyLoad.inject();
						$ocLazyLoad.toggleWatch(false);
						defer.resolve();
					})
					return defer.promise;
				}]
			}
		});

	$urlRouterProvider.otherwise('/screen1');


	//Client side Configuration to pretty url
	//Remove # from url

	$locationProvider.html5Mode(true);
}])