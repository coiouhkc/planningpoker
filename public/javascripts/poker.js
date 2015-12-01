/**
 * Created by Meyer on 01.12.2015.
 */
var app = angular.module('PlanningPokerApp', ['PlanningPokerApp.controllers', 'PlanningPokerApp.services', 'ngRoute'])
	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}]);
