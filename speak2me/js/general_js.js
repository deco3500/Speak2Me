$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});




/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function openNavMusic() {
    var player = document.getElementById("myNavmusic");
document.getElementById("miniplayer").style.display ="none";
player.style.width = "100%";
player.style.height = "100%";

}


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function closeNavMusic() {
    document.getElementById("myNavmusic").style.width = "0%";

stopmusic();

}




function minNavMasic() {

var player = document.getElementById("myNavmusic");

var canvas = document.getElementById("myCanvas");
var miniplayer = document.getElementById("miniplayer");



document.getElementById("miniplayer").style.display ="block";


 document.getElementById("myNavmusic").style.width = "0%";
miniplayer.style.display ="block";

}







function closeNavMusicmini(){
document.getElementById("miniplayer").style.display ="none";

stopmusic();





}











function play(track){

var musicplayer = document.getElementById("myAudio");
var song = document.getElementById("mp3Source");
song.src = track;

openNavMusic();

musicplayer.load();
musicplayer.play();










}


function stopmusic(){

var musicplayer = document.getElementById("myAudio");
var song = document.getElementById("mp3Source");
song.src = '';


musicplayer.load();
musicplayer.play();




}




