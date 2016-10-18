/* metadata for the narrated articles */
var mediaInfo = [
["0001", "Money bag: Police raid on anti-corruption official uncovers over $120mn in cash", "10/10/2016", "https://www.rt.com/news/358891-russia-corruption-officer-dollars/", "aidan_davis", "Business, Politics", "9/11/2016 21:19", "18", "2", "0.698961794"], 
["0002", "Venice: Emma Stone Wins Best Actress Prize for ‘La La Land’", "9/11/2016", "https://variety.com/2016/film/news/venice-emma-stone-wins-female-acting-prize-for-la-la-land-1201856971/", "aidan_davis", "Science", "9/11/2016 21:30", "5", "0", "0.565508505"], 
["0003", "Activity of Huntington’s disease gene curbed for 6 months in mice", "9/10/2016", "http://www.psypost.org/2016/09/activity-huntingtons-disease-gene-curbed-6-months-mice-44870", "aidan_davis", "Business", "9/11/2016 21:41", "3", "6", "0.120581599"], 
["0004", "Shailene Woodley on 'Divergent' Move to TV: 'I Didn’t Sign Up to Be in a Television Show'", "9/11/2016", "http://www.hollywoodreporter.com/news/shailene-woodley-divergent-move-tv-927187", "aidan_davis", "Entertainment", "9/11/2016 21:52", "4", "2", "0.299988321"], 
["0005", "96 people who ate Chipotle and got sick settled for cash — and some free-burrito coupons", "9/08/2016", "http://www.denverpost.com/2016/09/09/chipotle-foodborne-illness-cases-settled/", "aidan_davis", "Food, Business", "9/11/2016 22:03", "1", "15", "0.011119057"], 
["0006", "Here's all the drama that you missed from the 'The Bachelor Australia Finale", "15/09/2016", "https://www.buzzfeed.com/tahliapritchard/i-am-so-shook?utm_term=.ueJPK2aMW#.isLRJbVBp", "shelby_pye", "Entertainment", "9/11/2016 22:14", "10", "1", "0.622635375"], 
["0007", "Nadal stops match so distraught mother can find lost child", "29/09/2016", "https://au.sports.yahoo.com/tennis/a/32758243/rafael-nadal-stops-match-so-mother-can-find-lost-child/#page1", "shelby_pye", "Sport", "9/11/2016 22:25", "3", "2", "0.230719932"], 
["0008", "Adventure Time is Coming to and End in 2018", "29/09/2016", "http://comicbook.com/2016/09/29/adventure-time-is-coming-to-an-end-in-2018/", "shelby_pye", "Entertainment", "9/11/2016 22:36", "5", "1", "0.436490563"],
["0009", "This is exactly what you should be eating in exam time", "28/09/2016", "https://www.buzzfeed.com/gyanyankovich/eat-your-way-through-exams?utm_term=.mbqoKpW7M#.kugPyLNgX", "shelby_pye", "Food, Science", "9/11/2016 22:47", "8", "3", "0.434349707"],
["0010", "South Australia belted by second storm in 24 hours with winds of up to 140km/h", "29/09/2016", "https://www.theguardian.com/australia-news/2016/sep/29/south-australia-on-alert-again-as-adelaide-braces-for-strongest-storm-on-record", "shelby_pye", "Science, Local", "9/11/2016 22:58", "0", "20", "0"],
["0011", "Samsung Galaxy Note 7 banned on all U.S. flights due to fire hazard", "14/10/2016", "http://www.usatoday.com/story/news/2016/10/14/dot-bans-samsung-galaxy-note-7-flights/92066322/", "shelby_pye", "Technology", "9/11/2016 23:09", "12", "2", "0.600580922"],
["0012", "Cahill scores 40m screamer in City debut", "15/10/2016", "https://au.sports.yahoo.com/football/a/32911441/tim-cahill-scores-40-goal-for-melbourne-city-debut-melbourne-derby/#page1", "shelby_pye", "Sport", "9/11/2016 23:20", "2", "3", "0.117618231"],
["0013", "Olivia Wilde and Jason Sudeikis welcome second child", "15/10/2016", "http://www.hollywoodreporter.com/news/olivia-wilde-jason-sudeikis-second-938619", "shelby_pye", "Entertainment", "9/11/2016 23:31", "30", "54", "0.262992093"],
["0014", "This Is Why Mike Baird Overturned The Greyhound Ban", "14/10/2016", "https://www.buzzfeed.com/ginarushton/this-is-why-mike-baird-overturned-the-greyhound-ban?utm_term=.nrbm6ZM1y#.rn5lgDQJR", "shelby_pye", "Politics", "9/11/2016 23:42", "14", "8", "0.429513493"],
["0015", "Hillary Clinton Finally Addressed That Creepy Hovering Trump Did In The Debate", "16/10/2016", "https://www.buzzfeed.com/erinlarosa/hillary-clinton-finally-addressed-that-creepy-hovering-trump?utm_term=.rjy4JlB3z#.dhD9Gqdlk", "shelby_pye", "Politics", "9/11/2016 23:53", "9", "1", "0.595843615"], 
];


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


function getTagsSelected() {
    var tags = document.getElementsByClassName("tag");
    var tagArray = [];
    /* now we have a nodelist with the first value being irrelevant */
    for (var i=1; i<tags.length; i++) {
        // get the innerHTML, 
        tags.push(tags[i].innerHTML.split("<")[0]);
    }
    return tagArray;
}

function doTags() {
    var tagArray = getTagsSelected();
    var matchesArray = [];

    // iterate through each file's info and see if it has the tags
    for (var i=0; i<mediaInfo.length; i++) {
        for (var x=0; x<tagArray.length; x++) {
            if (mediaInfo[i][5].includes(tagArray[x])) {
                matchesArray.push(mediaInfo[i]); // push to array
                break; // only want to push a file once
            }
        }
    }

    /* matchesArray is now an array of file info containing matching files */
    return matchesArray;
}

// checks the score once a vote is added.
function scoreCheck() {
    for (var i=0; i<mediaInfo.length; i++) {
        mediaInfo[i][9] = getScore(mediaInfo[i][7], mediaInfo[i][8]);
    }
}

// found here, https://gist.github.com/honza/5050540, based off same formula in excel. 
function getScore(pos, neg) {
    var z, phat;

    z = 1.96;
    phat = 1 * pos / neg;

    return (phat + z*z/(2*neg) - z * Math.sqrt((phat*(1-phat)+z*z/(4*neg))/neg))/(1+z*z/negja);
}

function upvote(filename) {
    for (var i=0; i<mediaInfo.length; i++) {
        if (mediaInfo[i][0] == filename) {
            mediaInfo[i][7] += 1;
            break;
        }
    }
    // update the score
    scoreCheck();
}

function downvote(filename) {
    for (var i=0; i<mediaInfo.length; i++) {
        if (mediaInfo[i][0] == filename) {
            mediaInfo[i][8] += 1;
            break;
        }
    }
    // update total score
    scoreCheck();
}