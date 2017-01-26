$(window).load(function() {

	$('.location-img').height($(window).height() / 2);

});

$(window).on('resize', function() {
	$('.location-img').height($(window).height() / 2);
});

$(document).on('pagebeforecreate', '#minigame1', function() {
	$('#game_area').puzzle_dg(140)

});

$(document).on('pagebeforecreate', '#map-page', function() {
	if (getValue('intro') != 1) {
		$(':mobile-pagecontainer').pagecontainer('change', '#intro-page1');
		setValue('intro', 1);
	}

});
