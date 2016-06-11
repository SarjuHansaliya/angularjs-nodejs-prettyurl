require('angular');
require('angular-ui-router');
require('oclazyload');
var app = angular.module('prettyUrl',[
		'ui.router',
		'oc.lazyLoad',
	]);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
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
			template: "<screen1></screen1>",
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
}])