
var topOffset = $('#navbar').height() + $('#slider').height() + 30;

$(document).ready(function () {

	$('#affix').affix({
		offset: {
			top: topOffset
		}
	}); 
	
	$(function () {
	    var $affixElement = $('div[data-spy="affix"]');
	    $affixElement.width($affixElement.parent().width());
	});
	
});

var timer_id;

$(window).resize(function() {

    clearTimeout(timer_id);

    timer_id = setTimeout(function() {
		
		var $affixElement = $('div[data-spy="affix"]');
		$affixElement.width($affixElement.parent().width());
		topOffset = $('#navbar').height() + $('#slider').height() + 30;
		
    }, 300);
});
