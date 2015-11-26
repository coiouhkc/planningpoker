angular.module('poker', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])
    .controller('PokerController', ['$window', '$scope', '$location', function ($window, $scope, $location) {
		var pokerCtrl = this;
		
		var getId = function() {
			return 1;
		}
		
		var getStory = function () {
			return 'How long will it take to finish the project?';
		}
		
        this.id = getId();
		this.name = '';
		this.story = getStory();
		this.estimate = NaN;
		this.cards = ['0', '½', '1', '2', '3', '5', '8', '13', '21', '∞', '?'];
		
		this.sendEstimate = function (id, name, card) {console.log(name + ' with id ' + id + ' sends estimate: ' + card);};
    }])
	.controller('PokerOverviewController', function ($scope, $http) {
		var getCurrentPoll = function() {
			return { 
				/*"story": "How long will it take to finish the project?",*/
				"poll": [
				{"id": 1, "name": "Alexei", "estimate": "1"},
				{"id": 2, "name": "Andrej", "estimate": "2"},
				{"id": 3, "name": "SM", "estimate": "1"},
				{"id": 4, "name": "OZe", "estimate": "5"},
				{"id": 5, "name": "Remote", "estimate": "0"}]
			};
		}
		
		this.currentPoll = getCurrentPoll();
	})
	.controller('PokerSmController', function ($scope, $http) {
		this.story = '';
		this.nextStory = function(story) {
			console.log('proceeding to next story: ' + story);
		}
	})
	;