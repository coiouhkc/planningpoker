angular.module('poker', ['ngRoute', 'ngCookies'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])
    .controller('PokerController', function ($scope, $http, $cookies) {
		var pokerCtrl = this;
		
		if (! $cookies.get('pokerId')) {
			$http.get('/login').success(function (data){ pokerCtrl.id = data.id; $cookies.put('pokerId', data.id);})
		} else {
			pokerCtrl.id = $cookies.get('pokerId');
		}
		
		this.name = '';
		$http.get('/story').success(function (data){ pokerCtrl.story = data.story;})
		this.estimate = NaN;
		this.cards = ['0', '½', '1', '2', '3', '5', '8', '13', '21', '∞', '?'];
		
		this.sendEstimate = function (id, name, card) {$http.get('/estimate/'+id + '/' +  card);};
    })
	.controller('PokerOverviewController', function ($scope, $http) {
		var overviewCtrl = this;
		$http.get('/estimates').success(function (data){ overviewCtrl.currentPoll = data;})
	})
	.controller('PokerSmController', function ($scope, $http) {
		this.story = '';
		this.nextStory = function(story) {
			$http.get('/estimate/'+story);
		}
	})
	;