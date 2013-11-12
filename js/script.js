$(document).ready(function() {

	$(function() {
		setTimeout(hideSplash, 2000);
	});

	function hideSplash() {
		$.mobile.changePage("#home", "fade");
	}


	$('#icnCategory').click(function() {
		$('#slide_category').show();
	})
	$('#content').click(function() {
		$('#slide_category').hide();
	});
	$('#icnSearch').click(function() {
		$('#frmContentSear').slideToggle();
	})
	
});
