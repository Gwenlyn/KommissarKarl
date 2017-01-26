
//	//create map, set focus
//	var map = L.map('#map').setView([51.505, -0.06], 13);
//
//
//	//create layer with titles
//	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
//
//	//create marker
//	L.marker([51.5, -0.09]).addTo(map)
//	    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//	    .openPopup();

$(window).load(function() {

	$('.location-img').height($(window).height() / 2);

});

$(window).on('resize', function() {
	$('.location-img').height($(window).height() / 2);
});

//    $(document).on('pagebeforecreate', '#location-page', function() {
//    	alert('lala');
//    	
//    	
//    });
$(document).on('pagebeforecreate', '#mapPage', function() {

	// if (getValue("introRead") != 1){
	// $('#introPage').css("display", "");
	//
	$(':mobile-pagecontainer').pagecontainer('change', '#introPage');
	// }

});

function introduction() {

	$page = $('#introPage');

	$slide1_content = $('.slide1 carousel-caption');
	$slide2_content = $('.slide2 carousel-caption');
	$slide3_content = $('.slide3 carousel-caption');

	$slide1_content.append($('<h2>').html(
			'Herzlich Willkommen in Nettersheim, Herr Kommissar!'));
	$slide1_content.append($('<p>').html(
			'Eine kurze Einführung in die Bedienung des Spiels'));
	$slide1_content.enhanceWithin();
	$slide2_content.append($('<h2>').html('NFC'));
	$slide2_content.append($('<p>').html('Frag doch einfach mal Siri um Rat'));
	$slide2_content.enhanceWithin();
	$slide3_content.append($('<h2>').html(
			'Herr Kommissar, soeben traf eine Nachricht für Sie ein'));
	$slide3_content
			.append($('<p>')
					.html(
							'Jetzt aber schnell los, um den Mörder zu fassen und weitere Morde zu verhindern!'));
	//$slide3_content.append($('<a href="#" class="btn btn-primary btn-sm">Zur Karte</a>'));
	$slide3_content.enhanceWithin();
}