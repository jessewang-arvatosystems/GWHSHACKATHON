var blur = 25;
var point = 0;

window.onload = function () {

var fragmentTime;


jQuery('.timeout_message_show').hide();

var minutes = jQuery('span.minute').text();

var seconds = jQuery('span.second').text();

minutes = parseInt(minutes);

seconds = parseInt(seconds);

if (isNaN(minutes)) {

minutes = 00;

}

if (isNaN(seconds)) {

seconds = 00;

}

if (minutes == 60) {

minutes = 59;

}

if (seconds == 60) {

seconds = 59;

}

fragmentTime = (60 * minutes) + (seconds);

displayMinute = document.querySelector('span.minute');

displaySecond = document.querySelector('span.second');

startTimer(fragmentTime, displayMinute, displaySecond);

};

function startTimer(duration, displayMinute, displaySecond) {

var timer = duration, displayMinute, displaySecond;

var timeIntervalID = setInterval(function () {

minutes = parseInt(timer / 60, 10);

seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

displayMinute.textContent = minutes;

displaySecond.textContent = seconds;
blur= blur-2;

if(blur < 0) {
    
blur = 0;

}
$(document).ready(function(){
$("#pic").css("filter", "blur(" + blur + "px)");
$("#pic").css("-webkit-filter", "blur(" + blur + "px)");
});

if (--timer < 0) {

timer = 0;

if (timer == 0) {

clearInterval(timeIntervalID);

location.href="tryagain.html?score="+point;
}

}

}, 1000);

}



