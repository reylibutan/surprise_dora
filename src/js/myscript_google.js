var LANG_ENGLISH = "English";
var GOOGLE_DOT_COM = "http://google.com.ph";

$(document).ready(function() {
	redirectToActualGoogle();
	setGoogleInEnglish();
});

function redirectToActualGoogle() {
	if(isNewGoogleTab()) {
		window.location.href = GOOGLE_DOT_COM;
	}
}

function isNewGoogleTab() {
	var ret = true;
	var searchButton = $("#gbqfba");

	if(searchButton.length) {
		ret = false;
	}

	return ret;
}

function setGoogleInEnglish() {
	if(!isGoogleInEnglish()) {
		var englishGoogleUrl = $("div#_eEe a").filter(function() {
			return $(this).html() === LANG_ENGLISH;
		}).prop("href");

		window.location.href = englishGoogleUrl;
	}
}

function isGoogleInEnglish() {
	var englishGoogleUrl = $("div#_eEe a").filter(function() {
		return $(this).html() === LANG_ENGLISH;
	});

	return !(englishGoogleUrl.length);
}