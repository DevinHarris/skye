angular.module('Skye')
	.factory('Weather', ['$q', '$http', function($q, $http) {
		var weatherService = {};


		weatherService.getWeather = function(city)  {


			var coordsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city;


			return $http.get(coordsUrl)
				.then(function(results) {
					var data = results.data;
					var coords = data.results[0].geometry.location.lat + ',' + data.results[0].geometry.location.lng;

				return getWeatherData(coords);	

			});	

				

			 function getWeatherData(coords)  {
				var apiKey = 'cbbdddc644184a1d20ffc4a0e439650d',
			 	weatherUrl = 'https://api.forecast.io/forecast/' + apiKey + '/' + coords + '?callback=JSON_CALLBACK';


				return $http.jsonp(weatherUrl)
					.then(function(results) {
							
						var data = results.data;
						return data;

					}, function(err) {
						return err;
					});


			}		 

		};

		weatherService.getWeatherByGeoLoc = function() {

			if (navigator.geolocation) {
				var geoObj = navigator.geolocation;
				return geoObj.getCurrentPosition(function(position) {
					var coords = position.coords.latitude + ',' + position.coords.longitude;

					return getLocalWeather(coords);
					
				});
			} else {
				console.log('Unable to get location');
			}

			


		

			function getLocalWeather(coords) {

				var apiKey = 'cbbdddc644184a1d20ffc4a0e439650d',
					weatherUrl = 'https://api.forecast.io/forecast/' + apiKey + '/' + coords + '?callback=JSON_CALLBACK';

				return $http.jsonp(weatherUrl) 
					.then(function(results) {
						var data = results.data;

						console.log(weatherUrl);
						return data;
					});

			}

		};


		return weatherService;


	}]);