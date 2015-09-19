(function($) {

	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		date = new Date(),
		$dayEl = $('.date h2'),
		$dateEl = $('.curr-date'),
		$temp = $('.current-temp'),
		$time = $('.time'),
		$weekDay = $('.day h3');


	$dayEl.text(days[getCurDay()]);
	$dateEl.text(date.toLocaleDateString());

	function time() {
		var timeDate = new Date(),
		localTime = timeDate.toLocaleTimeString();

		$time.html(localTime);
	}

	function getCurDay() {
		return date.getDay() - 1;
	}


	setInterval(time, 100);

	






})(jQuery);