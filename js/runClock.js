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

GetTheme = { // Using GET Variables for theme testing in browser
	URLString : function (item) {
		var strval = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
		return strval ? strval[1] : strval;
	}
}
setTheme = GetTheme.URLString("theme") ? GetTheme.URLString("theme") : setTheme;

var setRefresh = setRefresh ? setRefresh*1000 : 30000;
var now = new Date(); // Current Date (Client Side)
var hours, hours12, use24;
function setHours () {
	hours = now.getHours ();
	hours = hours === 0 && !set24hr ? 12 : hours; // Eliminate 00:00 at midnight unless 24hr
	hours12 = hours > 12 ? hours - 12 : hours;
	use24 = set24hr ? hours : hours12; // 24hr Clock
}
setHours ();
function random (array)  { 
	// takes an array, returns one of it's elements
	var num = Math.floor(Math.random()*(array.length-1));
	return array[num];
};
function ldZ(num) { // Generates leading zeroes if needed
	var newNum = num < 10 ? "0" + num : num;
	return newNum;
}

function setDate() { // Sets the date
	now = new Date();
	setHours();
	$("#hour").html(ldZ(use24));
	$("#minute").html(ldZ(now.getMinutes()));
	$("#day span").html(dayNames[now.getDay()]);
	$("#month span").html(monthNames[now.getMonth()]);
	$("#date span").html(ldZ(now.getDate()));
	$("#year span").html(now.getFullYear());
	slabTextHeadlines();
};

function blinky () {
	if (setBlink)
		$(".blinkme").fadeToggle(500, "linear")
}

function slabTextHeadlines() { // Set Text Full Width
	$("h1").slabText();
};

function configTheme () { // Adjust CSS to preference via configure.js
	$("#time").css("padding-top", (setTop-20)+"px");
	switch (setTheme) {
		case "Colors":
			$("link.theme").attr("href","css/colorsTheme.css");
			break;
		default:			
			$("container").css("color", setColor);
			$("#month").css("background", setColor);
			$("html").css("font-family", setFont);
			break;
	}
};

$(window).load(function() { // Run 
	configTheme();
	setDate();
	setInterval("setDate()", setRefresh);
	setInterval("blinky()",500);
	$("#container").fadeTo(setFadeIn,setOpacity); // fade in, hides pre-js html
});

/*************************TODO**************************
- Remove bulk of case "Colors" back into colorsTheme.css
- Add Gray, Black, and White themes
- Remove random func if not used for something else
*******************************************************/
