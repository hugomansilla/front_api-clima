$(document).ready(function(){
	var url = 'https://api.darksky.net/forecast/';
	var key = '673c1a01d387a8a11eef344c812b436c/';
	var coords = {
		puq: '-53.1625446,-70.907785'
		pun: '-51.7262826,-72.5062409'
		por: '-53.295626,-70.3687417'
	};

	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto']

	$('#select').on.('change', function(){
		$.ajax({
	 		url: url + key + coords[$(this).val()] + '?' + 
	 			queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
	 		method: 'GET',
		}).then(function(data){
			console.log(data);
			$('#resumen').text(parseInt(data.currently.temperature)+ '°')
		});
	})
});
