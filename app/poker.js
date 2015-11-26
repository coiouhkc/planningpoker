angular.module('poker', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])
    .controller('PokerController', function ($scope, $http) {
		var pokerCtrl = this;
		
        $http.get('/login').success(function (data){ pokerCtrl.id = data.id;})
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