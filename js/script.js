$(document).ready(function() {

	$(function() {
		setTimeout(hideSplash, 2000);
	});

	function hideSplash() {
		$.mobile.changePage("menupage.html", "fade");
	}


	$('#icnCategory').click(function() {
		$('#slide_category').toggle();
	})
	$('#content').click(function() {
		$('#slide_category').hide();
	});
	$('#icnSearch').click(function() {
		$('#frmContentSear').slideToggle();
	})
	
});
