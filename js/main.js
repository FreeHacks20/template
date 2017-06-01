/* GLOBAL */
var names = [
	"Andrew",
	"Jonathan",
	"majster73",
	"Paul",
	"freerunner00",
	"FixFaxer",
	"Marie",
	"ImGalilo",
	"Zoldary",
	"Aaron",
	"jacksy99",
	"Adam",
	"alexy11",
	"Austin",
	"Brian",
	"choopaa",
	"c0udy",
	"Popoff",
	"Wokie",
	"NetFreak",
	"rifraf00"
];
var usernames = [
	"sahara35",
	"redBaron15",
	"Jackdaw67",
	"SgtSteel88",
	"shiver99",
	"Bile95",
	"rec0il47",
	"Prism41",
	"shadowWeaver26",
	"Pulsar16",
	"shadow_dancer35",
	"elementalist32",
	"gemini79",
	"Redshift18",
	"Gammaray51",
	"Lightyear60",
	"Blackhole68",
	"Marsyzzs",
	"Bigbangw",
	"4meLeventis",
	"abelm4rn",
	"accouchanz",
	"actiomt44",
	"cctivester",
	"adepton0",
	"advantsz",
	"Agraktine00",
	"ajalsuncX",
	"antheryyz",
	"Antivery97",
	"aarticlesca",
	"ash0fonear",
	"aventheXX",
	"banaminez9",
	"Beatorsh1e",
	"zelc0med",
	"welzbera8",
	"bhuniver7",
	"bizarre0londie",
	"blackScoop",
	"bootekitor",
	"brionetteX"
]
var comments = [
	"nice! i was looking for this for a long time. thx!!!",
	"This software is awesome! works like a charm... thanks admin :D",
	"amazing tool bro. thanks for sharing this, this generator is incredible",
	"AWESOME! this web is legit. amazing job, can't believe it really works",
	"WOW this trik is amazing, it really give some real stuff. thanks for sharing! :)",
	"Thanks for this dude... at first i thought this is some shit again.. You should sell this method",
	"This tool is FREAKING amazing! love this, this is what i was looking for",
	"Incredible job, finally some real generator that does its job.. thanks a lot!!",
	"damn I just generated gems for whole my life! thats sick, thanks!!",
	"OMG now I dont need to buy expensive gems! thx for sharing",
	"how often can i generated resoures without getting banned??",
	"SICK! finally an powerful tool that really works :) thank you so much, no worries about resources now :D",
	"perfect! its so awesome, now i dont need to buy gems for real money.. thx m8",
	"DAYUUUM!! i cant believe that really works. amazing job, thanks for sharing!",
	"still cant believe that it works and you doesnt get banned. i've been using it for half a month and still no problems. THANKS!!"
];

shuffle(names);
shuffle(usernames);
shuffle(comments);

function stopAnimation() {
	document.getElementById("nick").style.WebkitAnimation="none";
	document.getElementById("nick").style.animation="none";
}

// Fisher-Yates (Knuth) Shuffle
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function addUserComment() {
	var name = document.getElementById("commentName").value;
	var comment = document.getElementById("commentText").value;
	if (name.length < 1) {
		document.getElementById("commentName").className = document.getElementById("commentName").className + " error";
		document.getElementById("nameError").style.display = "inline";
	}
	else {
		document.getElementById("commentName").className = document.getElementById("commentName").className.replace(" error", "");
		document.getElementById("nameError").style.display = "none";
	}
	if (comment.length < 1) {
		document.getElementById("commentText").className = document.getElementById("commentText").className + " error";
		document.getElementById("commentError").style.display = "inline";
	}
	else {
		document.getElementById("commentText").className = document.getElementById("commentText").className.replace(" error", "");
		document.getElementById("commentError").style.display = "none";
	}
	/*
	if (name.length > 0 && comment.length > 0)
	{
		document.getElementById("comName1").innerHTML = document.getElementById("comName2").innerHTML;
		document.getElementById("comName2").innerHTML = document.getElementById("comName3").innerHTML;	

		document.getElementById("comContent1").innerHTML = document.getElementById("comContent2").innerHTML;
		document.getElementById("comContent2").innerHTML = document.getElementById("comContent3").innerHTML;	

		document.getElementById("date1").innerHTML = document.getElementById("date2").innerHTML;
		document.getElementById("date2").innerHTML = document.getElementById("date3").innerHTML;	

		document.getElementById("comName3").innerHTML = document.getElementById("commentName").value;
		document.getElementById("comContent3").innerHTML = document.getElementById("commentText").value;
		document.getElementById("date3").innerHTML = "0";

		document.getElementById("commentName").value = "";
		document.getElementById("commentText").value = "";
	}
	*/
	if (name.length > 0 && comment.length > 0) {
		$('.comment').animate({'opacity': 0}, 400);
		commentDelay = setInterval(addUserComment2, 400);
	}
}

function addUserComment2() {
	clearInterval(commentDelay);
	
	document.getElementById("comName1").innerHTML = document.getElementById("comName2").innerHTML;
	document.getElementById("comName2").innerHTML = document.getElementById("comName3").innerHTML;		

	document.getElementById("comContent1").innerHTML = document.getElementById("comContent2").innerHTML;
	document.getElementById("comContent2").innerHTML = document.getElementById("comContent3").innerHTML;		

	document.getElementById("date1").innerHTML = document.getElementById("date2").innerHTML;
	document.getElementById("date2").innerHTML = document.getElementById("date3").innerHTML;		

	document.getElementById("comName3").innerHTML = document.getElementById("commentName").value;
	document.getElementById("comContent3").innerHTML = document.getElementById("commentText").value;
	document.getElementById("date3").innerHTML = "0";	

	document.getElementById("commentName").value = "";
	document.getElementById("commentText").value = "";

	$('.comment').animate({'opacity': 1}, 400);
}

function addComments() {
	document.getElementById("comName1").innerHTML = names[0];
	document.getElementById("comContent1").innerHTML = comments[0];


	document.getElementById("comName2").innerHTML = names[1];
	document.getElementById("comContent2").innerHTML = comments[1];


	document.getElementById("comName3").innerHTML = names[2];
	document.getElementById("comContent3").innerHTML = comments[2];

	document.getElementById("date1").innerHTML = Math.floor(Math.random() * (48 - 41) + 41);
	document.getElementById("date2").innerHTML = Math.floor(Math.random() * (40 - 33) + 33);
	document.getElementById("date3").innerHTML = Math.floor(Math.random() * (20 - 8) + 8);

	/* ADD RESOURCES */

	document.getElementById("recentUsername1").innerHTML = usernames[0];
	document.getElementById("recentUsername2").innerHTML = usernames[1];
	document.getElementById("recentUsername3").innerHTML = usernames[2];
	document.getElementById("recentUsername4").innerHTML = usernames[3];

	document.getElementById("flag1").innerHTML = "<img src='img/flags/" + Math.floor(Math.random() * (51 - 1) + 1) + ".png'>";
	document.getElementById("flag2").innerHTML = "<img src='img/flags/" + Math.floor(Math.random() * (51 - 1) + 1) + ".png'>";
	document.getElementById("flag3").innerHTML = "<img src='img/flags/" + Math.floor(Math.random() * (51 - 1) + 1) + ".png'>";
	document.getElementById("flag4").innerHTML = "<img src='img/flags/" + Math.floor(Math.random() * (51 - 1) + 1) + ".png'>";

	document.getElementById("generatedResources1").innerHTML = "generated " + Math.floor(Math.random() * (99999 - 79999) + 79999) +
		" gems & " + Math.floor(Math.random() * (999999 - 799999) + 799999) + " gold & " +
		Math.floor(Math.random() * (999999 - 799999) + 799999) + " elixir.";
	document.getElementById("generatedResources2").innerHTML = "generated " + Math.floor(Math.random() * (99999 - 79999) + 79999) +
		" gems & " + Math.floor(Math.random() * (999999 - 799999) + 799999) + " gold & " +
		Math.floor(Math.random() * (999999 - 799999) + 799999) + " elixir.";
	document.getElementById("generatedResources3").innerHTML = "generated " + Math.floor(Math.random() * (99999 - 79999) + 79999) +
		" gems & " + Math.floor(Math.random() * (999999 - 799999) + 799999) + " gold & " +
		Math.floor(Math.random() * (999999 - 799999) + 799999) + " elixir.";
	document.getElementById("generatedResources4").innerHTML = "generated " + Math.floor(Math.random() * (99999 - 79999) + 79999) +
		" gems & " + Math.floor(Math.random() * (999999 - 799999) + 799999) + " gold & " +
		Math.floor(Math.random() * (999999 - 799999) + 799999) + " elixir.";
}


var loadingVars = [
	"Loading...",
	"Preparing files...",
	"Preparing complete...",
	"Initializing...", 
	"Connecting to server...",
	"Connecting to server...",
	"Connecting to server...",
	"Loading Module 0/21", 
	"Loading Module 2/21", 
	"Loading Module 2/21", 
	"Loading Module 3/21",
	"Loading Module 5/21", 
	"Loading Module 7/21", 
	"Loading Module 8/21", 
	"Loading Module 10/21", 
	"Loading Module 11/21", 
	"Loading Module 11/21", 
	"Loading Module 13/21", 
	"Loading Module 17/21", 
	"Loading Module 19/21",
	"Loading Module 19/21",
	"Loading Module 21/21", 
	"Loading...",
	"Verifying...",
	"Verifying...",
	"Preparing...",
	"Server Application...",
	"Authenticating user...",
	"Authenticating user...",
	"Applying to user ",
	"Applying to user ",
	"Connecting ",
	"Connecting ",
	"Connecting ",
	"Loading ...",
	"Waiting for the server...",
	"Waiting for the server...",
	"Connection established",
	"Waiting for the server...",
	"Waiting for the server...",
	"Server response OK",
	"Loading...",
	"Generating package ",
	"Generating package ",
	"Loading...",
	"Loading...",
	"Generating package ",
	"Generating package ",
	"Generating package ",
	"Loading...",
	"Loading...",
	"Generating package ",
	"Generating package ",
	"Loading...",
	"Generating resources...",
	"Generating resources...",
	"Generating resources...",
	"Optimizing...",
	"Pending verification...",
	"Pending verification...",
	"Pending verification...",
	"Pending verification..."
];

var counter = 0;
var loadingInterval = 0;
var nick, gems, gold, elixir;

function generate() {
	nick = document.getElementById("nick").value;
	gems = document.getElementById("amount-gems").innerHTML;
	gold = document.getElementById("amount-gold").innerHTML;
	elixir = document.getElementById("amount-elixir").innerHTML;

	if(nick.length > 0) {
		document.getElementById("nick").className = "";
		document.getElementById("nick").disabled = true;

		$("#firstStep").slideUp("slow");
		document.getElementById("button").remove();
		document.getElementById("secondForm").style.display = "inline";	

		$("#mainInfo").slideUp(1000);
		slideInterval = setInterval(slideDownInfo, 2*1000);

		loadingInterval = setInterval(loadingProgress, 5*100);
	}
	else {
		stopAnimation();
		document.getElementById("nick").className = document.getElementById("nick").className + " error";
	}
}

function loadingProgress () {
	document.getElementById("loading").innerHTML = loadingVars[counter];
	console.log(counter);
	if(counter == 29 || counter == 30 || counter == 31 || counter == 32 || counter == 33) {
		document.getElementById("loading").innerHTML += "<span class='loadingText'>" + nick + "</span>...";
	}
	if(counter == 42 || counter == 43) {
		document.getElementById("loading").innerHTML += "<span id='amount-gems' class='loadingText'>" + gems + "</span> gems...";
	}
	if(counter == 46 || counter == 47 || counter == 48) {
		document.getElementById("loading").innerHTML += "<span id='amount-gold' class='loadingText'>" + gold + "</span> gold...";
	}
	if(counter == 51 || counter == 52) {
		document.getElementById("loading").innerHTML += "<span id='amount-elixir' class='loadingText'>" + elixir + "</span> elixir...";
	}
	if(counter == 61) /* 61 */
	{
		clearInterval(loadingInterval);
		verification();
	}
	counter++;
}

function slideDownInfo () {
	clearInterval(slideInterval);

	/*
	document.getElementById("mainInfo").innerHTML = "Username: <span id='date'>" + nick + "</span> "
	+ "- - - Generate: <span id='smallGems' class='goods'>" + gems + "</span> gems / <span id='smallGold'"
	+ " class='goods'>" + gold + "</span> gold / <span id='smallElixir' class='goods'>" + elixir + "</span> elixir";
	*/
	/*document.getElementById("mainInfo").className += "secondInfo";*/
	document.getElementById("mainInfo").innerHTML = "<span class='line'>Username: <span id='date'>" + nick + "</span></span>"
	+ "<span class='dashes'> - - - Generate: </span><span class='line'><span id='smallGems' class='goods'>" + gems + "</span> gems </span>"
	+ "<span class='dashes'>/</span> <span class='line'><span id='smallGold'"
	+ " class='goods'>" + gold + "</span> gold </span><span class='dashes'>/</span> <span class='line'><span id='smallElixir' class='goods'>"
	+ elixir + "</span> elixir</span>";

	$("#mainInfo").slideDown(1000);
}

function verification() {
	$(".resources").fadeToggle(300);
	$("#secondStep").fadeToggle(300);
	$("#username").fadeToggle(300);

	fadeInterval = setInterval(verification2, 300);
}

function verification2() {
	clearInterval(fadeInterval);

	$("#username2").fadeIn(300);
	/*
	document.getElementById("username").className = "usernameSecond username";
	document.getElementById("username").innerHTML = "<div id='verificationText'><p class='verificationBold'>Human Verification</p>"
	+ "<p class='verificationUnder'>Please verify that You're human</p>"
	+ "<div class='verificationInstructions'>"
	+ "<ul>"
	+ "<li id='download'><b>Step 1:</b> Click \"Download\"</li>"
	+ "<li id='task'><b>Step 2:</b> Complete a free task! It takes only 1 minute.</li>"
	+ "<li id='done'><b>Step 3:</b> Done! Enjoy tons of gems, gold and elixir in Clash of Clans!</li></ul>"
	+ "<div id='offers'></div></div></div>"
 	+ "<div id='girl'></div>";
 	*/
}

function offersClick() {
	document.getElementById("offers").className = "offersActive";
	console.log("opa");
}

function getIP(json) {
	var month = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];

	document.addEventListener("DOMContentLoaded", function() { 
		document.getElementById("ip").innerHTML = json.ip;

		var d = new Date();
		d.setDate(d.getDate() - 3);
		var dFormat = month[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

		document.getElementById("date").innerHTML = dFormat;

		addComments();
	});
}

setInterval(incTime, 60*1000);

function incTime () {
	var dateIds = ["date1", "date2", "date3"];

	for (i = 0; i < 3; i++) {
		var dateComment = document.getElementById(dateIds[i]).innerHTML;
		dateComment++;
		document.getElementById(dateIds[i]).innerHTML = dateComment;
	}
}

setInterval(usersOnline, 8*1000);
function usersOnline () {
	var usersNumber = document.getElementById("usersCount").innerHTML
	if (usersNumber <= 15) {
		document.getElementById("usersCount").innerHTML = (parseInt(usersNumber) + Math.floor(Math.random() * (4-1) + 1));
	}
	else if ((usersNumber > 15) && (usersNumber < 40)) {
		// Math.round(Math.random()) * 2 - 1 gives 1 or -1
		document.getElementById("usersCount").innerHTML = (parseInt(usersNumber) + (Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * (4-1) + 1));
	}
	else { // if > 40
		document.getElementById("usersCount").innerHTML = (parseInt(usersNumber) - Math.floor(Math.random() * (4-1) + 1));
	} 

}


var recentCounter = 4;
setInterval(recentActivity, 8*1000);
function recentActivity () {
	document.getElementsByClassName("activity")[0].className += " firstOne";
	// $(".activity").get(0).remove();
	/*
	$(".activity")[0].hide(400, function() {
		//$(".activity")[0].remove();
		alert("nise");
	});
	*/
	$(".firstOne").hide(600, function() {
		$(this).remove();
	});
	$("#activityLog").append("<div class='activity' style='display:none'><div class='flag'>" +
		"<img src='img/flags/" + Math.floor(Math.random() * (51 - 1) + 1) + ".png'></div>" +
		"<div id='message4' class='message'><span id='recentUsername4' class='activityUsername'>" +
		usernames[recentCounter] + "</span>" +
		"<span id='generatedResources4' class='generatedResources'>" +
		" generated " + Math.floor(Math.random() * (99999 - 79999) + 79999) +
		" gems & " + Math.floor(Math.random() * (999999 - 799999) + 799999) + " gold & " +
		Math.floor(Math.random() * (999999 - 799999) + 799999) + " elixir." +
		"</span></div></div>");
	$(".activity").last().show(600);
	if(recentCounter == 41) recentCounter = 3;
	recentCounter++;
	// document.getElementById("activityLog").innerHTML += "<div class='activity'><div id='flag4' class='flag'></div><div id='message4' class='message'><span id='recentUsername4' class='activityUsername'>Algirdas</span><span id='generatedResources4' class='generatedResources'> generated 247121 gems & 142246 gold & 229687 elixir.</span></div></div>";

}