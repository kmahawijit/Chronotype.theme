var dayNames = new Array(
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
);
var monthNames = new Array(
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
);

var setRefresh = setRefresh ? setRefresh*1000 : 30000;
var now = new Date(); // Current Date (Client Side)
var hours, hours12, use24 = now.getHours ();
function upDate () {
	now = new Date();
	hours = now.getHours ();
	hours = hours === 0 && !set24hr ? 12 : hours; // Eliminate 00:00 at midnight unless 24hr
	hours12 = hours > 12 ? hours - 12 : hours;
	use24 = set24hr ? hours : hours12; // 24hr Clock
}
setInterval("upDate()", 1000);
function random (max)  { // Random Number
	return Math.floor(Math.random()*(max+1));
};
function ldZ(num) { // Generates leading zeroes
	var newNum = num < 10 ? "0" + num : num;
	return newNum;
}

function setDate() { // Sets the date
	$("#hour").html(ldZ(use24));
	$("#minute").html(ldZ(now.getMinutes()));
	$("#day span").html(dayNames[now.getDay()]);
	$("#month span").html(monthNames[now.getMonth()]);
	$("#date span").html(ldZ(now.getDate()));
	$("#year span").html(now.getFullYear());
};

function blinky () {
	$(".blinkme").fadeToggle(500, "linear")
}

function slabTextHeadlines() { // Set Text Full Width
	$("h1").slabText();
};

function setConfig () { // Adjust CSS to preference via configure.js
	switch (setTheme) {
		case "Colors":
			$("link.theme").attr("href","css/colorsTheme.css");
			break;
		default:	
			//$("link.theme").attr("href","css/default.css");			
			$("body").css('color', setColor);
			$("#month").css('background', setColor);
			$("html").css('font-family', setFont);
			break;
	}
	$("body").css('opacity', setOpacity);
	$("#time").css('padding-top', (setTop-20)+"px");
};

$(window).load(function() { // Run 
	setDate();
	setInterval("blinky()",500);
	setConfig();
	slabTextHeadlines();
	$("body div").fadeTo(setFadeIn,1); // fade in, hides pre-js html
	setInterval("setDate()", setRefresh);
});
