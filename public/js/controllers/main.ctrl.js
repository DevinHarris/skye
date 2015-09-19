angular.module('Skye')
	.controller('MainCtrl', ['Weather', function(Weather) {

	var vm = this,
		city = vm.city;
		
	vm.Math = window.Math;
	vm.days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


	vm.fetchWeather = function(city) {

		Weather.getWeather(city)
			.then(function(data) {
				vm.place = data;
				var temp = vm.place.currently.temperature,
					weeklyTemp = vm.place.daily.data;

				vm.curTemp = Math.round(temp);
				
		});
	};

	vm.displayWeather = function(city) {
		fetchWeather(city);
	};

	vm.fetchWeather('Atlanta');



	vm.getLocal = function() {

		Weather.getWeatherByGeoLoc().then(function(data) {
			vm.place = data;
			console.log(vm.place);
		});

	};

}]);