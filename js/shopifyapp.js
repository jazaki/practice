window.onload = getUrlParameter

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


$(document).ready(function() {
	'use strict';	
	var urlParam = getUrlParameter('fp_ref');
	if(urlParam && urlParam.length > 0) {
		$(".ref-btn").each(function() {
			var currentUrl = $(this).attr('href');
			$(this).attr("href", currentUrl + '?fp_ref=' + urlParam);
		})
	}	
});
