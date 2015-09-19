angular.module('Skye')
	.directive('weekly-weather', ['Weather', function(Weather) {

		return {
			restrict: 'EA',
			controller: function() {
				Weather.getWeather(city)
					.then(function(data) {
						vm.place = data;
					});
			}
		};


	}]);