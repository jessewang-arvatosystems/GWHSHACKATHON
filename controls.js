$(document).ready(function(){

var rightAnswer ;



function checkAnswer(userselect, answer){
   if(userselect === answer){
      point = 5 + point;
      blur = 25;
     loadArtist(getRandomArtists());
   }
}

$( document ).on( "click", ".answer", function() {
  var userselect = $(this).text();
  checkAnswer(userselect, rightAnswer);
  console.log(point);                  
});

var drake = {
 img:"Fader_Drake_Peckmezian_high_res_v3-2015-08-31_010_auffnh.jpg",
  rightAnswer: "Drake",
  answers: ["Selena", "Wiz", "Fetty Wap", "Drake"],
    mp3: "Drake - One Dance.mp3"
};

function loadArtist(drake){
  $('#pic').attr("src", drake.img);
  rightAnswer = drake.rightAnswer;
  $('.answer').remove();
  for (var i = 0; i < 4; i++){
    $('.gamebox').append("<button class='answer'>" + drake.answers[i] + "</button>");
  }
  playSong(drake.mp3);
}

var selena = {
 img:"Selena.jpg",
  rightAnswer: "Selena Gomez",
  answers: ["Drake","Selena Gomez", "Rihana", "Arianna"],
  mp3: "015-Selena Gomez - Hands To Myself.mp3"
};

var ArianaGrande = {
  img:"Ariana Grande.jpeg",
    rightAnswer:"Ariana",
    answers: ["Beyonce", "Ariana", "Drake", "Rihanna"],
    mp3: "Ariana_Grande_-_Dangerous_Woman.mp3"
};


var Rihanna = {
 img:"rihanna.jpg",
  rightAnswer:"Rihanna",
  answers: ["Rihanna", "Drake", "Beyonce", "Wiz Khalifa"],
  mp3: "[FOCUSWAP.COM]_Rihanna_Work_ft_Drake.mp3"
};


var Beyonce = {
  img: "Beyonce.jpg",
  rightAnswer:"Beyonce",
  answers:["Wiz Khalifa","Beyonce", "Selena", "Ariana"],
  mp3: "Beyonce_-_Formation.mp3"
};


var Wiz = {
img:"Wiz.jpg",
  rightAnswer:"Wiz Khalifa",
  answers:["Fetty Wap", "Wiz Khalifa", "Drake", "Selena"],
  mp3: "Wiz-Khalifa-Feat.-Charlie-Puth-See-You-Again.mp3"
};

var FettyWap = {
  img:"Fetty Wap.jpg",
  rightAnswer:"Fetty Wap",
  answers:["Fetty Wap", "Beyonce", "Rihanna", "Wiz Khalifa"],
  mp3: "Fetty-Wap-679-feat.-Remy-Boyz.mp3"
};

var artists = [drake, selena, ArianaGrande, Rihanna, Beyonce, Wiz, FettyWap];

function getRandomArtists(){
  var randomIndex = Math.floor(Math.random()*artists.length);
  return artists[randomIndex];
}

 loadArtist(getRandomArtists());
});
 
 function playSong(song){
     var audio = document.getElementById('audio');

        var source = document.getElementById('audioplay');
        if (audio.readyState) {
            audio.pause();
            audio.currentTime = 0;
        }
        source.src = song;

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    }