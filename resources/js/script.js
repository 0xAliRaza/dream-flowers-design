$(document).ready(() => {
	$('#topNavbarCollapsible').on('show.bs.collapse', function () {
		$('#navbar-top').css({ 'background-color': 'rgba(0,0,0,0.5)' });
	});
	$('#topNavbarCollapsible').on('hide.bs.collapse', function () {
		$('#navbar-top').css({ 'background-color': 'transparent' });
	});
	$(window).resize(function () {
		if ($(window).width() <= 772) {
			$('#topNavbarCollapsible').collapse('hide');
			// $('#navbar-top').css({ 'background-color': 'transparent' });
		}
	});
});
