$(document).ready(function(){
    var score = location.search.split('score=')[1];
    $('.scoreNumber').text(score);
});

