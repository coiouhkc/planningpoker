/**
 * Created by Meyer on 01.12.2015.
 */
angular.module('PlanningPokerApp.services', []).
factory('pokerAPIservice', function ($http) {

	var pokerAPI = {};

	pokerAPI.getId = function () {
		return $http.get('/poker/id');
	}

	pokerAPI.getCurrentStory = function () {
		return $http.get('/poker/story');
	}

	pokerAPI.nextStory = function (story) {
		return $http.post('/poker/nextStory/', {story: story});
	}

	pokerAPI.getCurrentPoll = function () {
		return $http.get('/poker/poll');
	}

	pokerAPI.sendEstimate = function (id, name, estimate) {
		return $http.post('/poker/estimate', {id: id, name: name, estimate: estimate});
	}

	return pokerAPI;
});