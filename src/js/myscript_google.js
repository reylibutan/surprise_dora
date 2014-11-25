var LANG_ENGLISH = "English";
var GOOGLE_DOT_COM = "https://google.com";
var LUCKY_BTN_ID = "gbqfbb";

$(document).ready(function() {
	//must be Google site (not new tab)
	//must be in English (to show "I'm feeling Lucky")
	redirectToActualGoogle();
	setGoogleInEnglish();

	//replace Google logo with 4th Anniversary Picture
	replaceGoogleLogo();

	//"I'm Feeling Lhuby"
	initImFeelingLhubyButton();
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
	var $englishGoogleUrl = $("div#_eEe a").filter(function() {
		return $(this).html() === LANG_ENGLISH;
	});

	return !($englishGoogleUrl.length);
}

function replaceGoogleLogo() {
	var $logo_div = $("#hplogo");
	var $img_el = $logo_div.find("a:first img");
	var anniv_logo = "http://fc03.deviantart.net/fs70/f/2012/145/1/4/happy_4th_anniversary__by_knotberry-d5122gn.jpg";	

	//hide share button
	$("div._P7b").hide();

	$img_el.fadeOut(750, function() {
		$img_el.addClass("custom_google_logo");
		$img_el.prop("src", anniv_logo);
		$img_el.fadeIn(750);
	});
}

function initImFeelingLhubyButton() {
	var $btn_div = $("#gbqfbwa");
	var lhuby_btn = document.createElement("input");
	var $lhuby_btn = $(lhuby_btn);

	lhuby_btn.type = "button";
	lhuby_btn.value = "I'm feeling Lhuby!";
	lhuby_btn.className = "gbqfba glowing-pink";

	$lhuby_btn.css("background", "#FFFFFF");
	$lhuby_btn.find("span").html("Im feeling Lhuby!");
	$lhuby_btn.addClass('glowing-pink');

	$lhuby_btn.click(function(e) {
		alert();
	});
    
    $btn_div.append(lhuby_btn);
}