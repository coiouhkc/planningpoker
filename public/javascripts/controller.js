/**
 * Created by Meyer on 01.12.2015.
 */
angular.module('PlanningPokerApp.controllers', []).
controller('PokerController', function ($scope, pokerAPIservice) {
	var pokerCtrl = this;

	pokerAPIservice.getId().success( function (data){
		pokerCtrl.id = data.id;
	});

	pokerAPIservice.getCurrentStory().success( function (data){
		pokerCtrl.story = data.story;
	});

	this.name = '';
	this.estimate = NaN;
	this.cards = ['0', '½', '1', '2', '3', '5', '8', '13', '21', '∞', '?'];

	this.sendEstimate = function (id, name, card) {
		pokerAPIservice.sendEstimate(id, name, card);
	}
}).
controller('PokerOverviewController', function ($scope, pokerAPIservice) {
	var pokerOverviewCtrl = this;
	pokerAPIservice.getCurrentPoll().success(function(data) {
		pokerOverviewCtrl.currentPoll = data;
	});
}).
controller('PokerSmController', function ($scope, pokerAPIservice) {
	this.story = '';
	this.nextStory = function(story) {
		pokerAPIservice.nextStory(story);
	}
});