/* metadata for the narrated articles */
var mediaInfo = [
["01", "Money bag: Police raid on anti-corruption official uncovers over $120mn in cash", "10/10/2016", "https://www.rt.com/news/358891-russia-corruption-officer-dollars/", "aidan_davis", "Business, Politics", "9/11/2016 21:19", "18", "2", "0.698961794", "https://img.rt.com/files/2016.09/original/57d3de78c4618848168b45a9.jpg"], 
["02", "Venice: Emma Stone Wins Best Actress Prize for ‘La La Land’", "9/11/2016", "https://variety.com/2016/film/news/venice-emma-stone-wins-female-acting-prize-for-la-la-land-1201856971/", "aidan_davis", "Science", "9/11/2016 21:30", "5", "0", "0.565508505", "https://pmcvariety.files.wordpress.com/2016/09/emma.jpg?w=640&h=360&crop=1"], 
["03", "Activity of Huntington’s disease gene curbed for 6 months in mice", "9/10/2016", "http://www.psypost.org/2016/09/activity-huntingtons-disease-gene-curbed-6-months-mice-44870", "aidan_davis", "Business", "9/11/2016 21:41", "3", "6", "0.120581599", "http://www.psypost.org/wp-content/uploads/2015/07/DNA-double-helix-by-Wellcome-Images-702x336.jpg"], 
["04", "Shailene Woodley on 'Divergent' Move to TV: 'I Didn’t Sign Up to Be in a Television Show'", "9/11/2016", "http://www.hollywoodreporter.com/news/shailene-woodley-divergent-move-tv-927187", "aidan_davis", "Entertainment", "9/11/2016 21:52", "4", "2", "0.299988321", "http://cdn3.thr.com/sites/default/files/imagecache/landscape_928x523/2016/03/gettyimages-515639254-h_2016.jpg"], 
["05", "96 people who ate Chipotle and got sick settled for cash — and some free-burrito coupons", "9/08/2016", "http://www.denverpost.com/2016/09/09/chipotle-foodborne-illness-cases-settled/", "aidan_davis", "Food, Business", "9/11/2016 22:03", "1", "15", "0.011119057", "https://i0.wp.com/www.denverpost.com/wp-content/uploads/2016/06/chipotle_sign1.jpg?w=810&crop=0%2C0px%2C100%2C9999px"], 
["06", "Here's all the drama that you missed from the 'The Bachelor Australia Finale", "15/09/2016", "https://www.buzzfeed.com/tahliapritchard/i-am-so-shook?utm_term=.ueJPK2aMW#.isLRJbVBp", "shelby_pye", "Entertainment", "9/11/2016 22:14", "10", "1", "0.622635375", "https://img.buzzfeed.com/buzzfeed-static/static/2016-09/15/7/enhanced/buzzfeed-prod-web11/anigif_original-grid-image-27405-1473939725-3.gif"], 
["07", "Nadal stops match so distraught mother can find lost child", "29/09/2016", "https://au.sports.yahoo.com/tennis/a/32758243/rafael-nadal-stops-match-so-mother-can-find-lost-child/#page1", "shelby_pye", "Sport", "9/11/2016 22:25", "3", "2", "0.230719932", "https://s.yimg.com/iu/api/res/1.2/e8cyEoYB9.lnV0xjgB.Wxg--/cm90YXRlPWF1dG87dz02NDA7YXBwaWQ9eXZpZGVv/https://s.yimg.com/dh/ap/default/160928/38E21E0100000578-3811771-image-a-1_1475075172572.jpg"], 
["08", "Adventure Time is Coming to and End in 2018", "29/09/2016", "http://comicbook.com/2016/09/29/adventure-time-is-coming-to-an-end-in-2018/", "shelby_pye", "Entertainment", "9/11/2016 22:36", "5", "1", "0.436490563", "http://media.comicbook.com/2016/09/adv-time-202232.jpg"],
["09", "This is exactly what you should be eating in exam time", "28/09/2016", "https://www.buzzfeed.com/gyanyankovich/eat-your-way-through-exams?utm_term=.mbqoKpW7M#.kugPyLNgX", "shelby_pye", "Food, Science", "9/11/2016 22:47", "8", "3", "0.434349707", "https://www.buzzfeed.com/gyanyankovich/eat-your-way-through-exams?utm_term=.mbqoKpW7M#.kugPyLNgX"],
["10", "South Australia belted by second storm in 24 hours with winds of up to 140km/h", "29/09/2016", "https://www.theguardian.com/australia-news/2016/sep/29/south-australia-on-alert-again-as-adelaide-braces-for-strongest-storm-on-record", "shelby_pye", "Science, Local", "9/11/2016 22:58", "0", "20", "0", "https://i.guim.co.uk/img/media/05945872f6bd5bb77843d7c775c1845d14436527/0_230_3500_2100/master/3500.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=354125ddaa11563da4c90d10568d5560"],
["11", "Samsung Galaxy Note 7 banned on all U.S. flights due to fire hazard", "14/10/2016", "http://www.usatoday.com/story/news/2016/10/14/dot-bans-samsung-galaxy-note-7-flights/92066322/", "shelby_pye", "Technology", "9/11/2016 23:09", "12", "2", "0.600580922", "http://www.gannett-cdn.com/-mm-/d4d253303a7d41dc8750b8eadd6e87d44a7f0965/c=5-0-4027-3024&r=x404&c=534x401/local/-/media/2016/10/14/USATODAY/USATODAY/636120561519253764-samsung-warning.jpg"],
["12", "Cahill scores 40m screamer in City debut", "15/10/2016", "https://au.sports.yahoo.com/football/a/32911441/tim-cahill-scores-40-goal-for-melbourne-city-debut-melbourne-derby/#page1", "shelby_pye", "Sport", "9/11/2016 23:20", "2", "3", "0.117618231", "https://s.yimg.com/iu/api/res/1.2/rdnxsPCZSahKzDnYPYcWXw--/cm90YXRlPWF1dG87dz02NDA7YXBwaWQ9eXZpZGVv/https://s.yimg.com/ea/img/-/161015/5801fe1922b38_tim_cahill_goal_630_1c03va4-1c03vgp.jpg"],
["13", "Olivia Wilde and Jason Sudeikis welcome second child", "15/10/2016", "http://www.hollywoodreporter.com/news/olivia-wilde-jason-sudeikis-second-938619", "shelby_pye", "Entertainment", "9/11/2016 23:31", "30", "54", "0.262992093", "http://cdn5.thr.com/sites/default/files/imagecache/landscape_928x523/2016/04/gettyimages-516805056.jpg"],
["14", "This Is Why Mike Baird Overturned The Greyhound Ban", "14/10/2016", "https://www.buzzfeed.com/ginarushton/this-is-why-mike-baird-overturned-the-greyhound-ban?utm_term=.nrbm6ZM1y#.rn5lgDQJR", "shelby_pye", "Politics", "9/11/2016 23:42", "14", "8", "0.429513493", "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/14/0/asset/buzzfeed-prod-web06/sub-buzz-16833-1476421058-1.jpg?resize=625:402"],
["15", "Hillary Clinton Finally Addressed That Creepy Hovering Trump Did In The Debate", "16/10/2016", "https://www.buzzfeed.com/erinlarosa/hillary-clinton-finally-addressed-that-creepy-hovering-trump?utm_term=.rjy4JlB3z#.dhD9Gqdlk", "shelby_pye", "Politics", "9/11/2016 23:53", "9", "1", "0.595843615", "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/15/11/asset/buzzfeed-prod-web09/sub-buzz-21552-1476546601-1.png?resize=625:449"], 
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
        tagArray.push(tags[i].innerHTML.split("<")[0]);
    }

    return tagArray;
}

function doTags() {
    var tagArray = getTagsSelected();
    var matchesArray = [];

    // iterate through each file's info and see if it has the tags
    for (var i=0; i<mediaInfo.length; i++) {
        for (var x=0; x<tagArray.length; x++) {
                      if (tagArray[x].includes(mediaInfo[i][5]))  {
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






function loadcards(){

    var cardArray = doTags();

console.log(cardArray);







var lines = '';


 for (var i=0; i<cardArray.length; i++) {
        

var filelocation = ''
filelocation += 'media/' +cardArray[i][0]+ '.mp3'

lines += '<div class="column">';
lines += '<img src="'


lines +=cardArray[i][10];

lines +='" class="" alt="">';
lines += '<div class="after">';
lines += cardArray[i][1];
lines += '<div class ="button secondary expanded" onclick="play(';
lines += "'"
lines += filelocation;
lines += "'"
lines +=')"> &#x276E;&#x276E;PLAY&#x276F;&#x276F;</div></div>';
lines += '</div>';















        
    }





document.getElementById("tagged-news").innerHTML = lines;

           
 var owl = $("#tagged-news"),
      i = 0,
      textholder,
      booleanValue = false;
owl.owlCarousel();
    owl.data('owlCarousel').destroy();
owl.owlCarousel({

   loop:true,
    margin:0,
    center:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1200:{
            items:6
        }
    }

    }    );



};







document.addEventListener("DOMContentLoaded", function() {
  loadcards();
});






function setcardsup(){



$(".owl-carousel").owlCarousel({ 

    loop:true,
    margin:0,
    center:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1200:{
            items:6
        }
    }


});


  $(".owl-carousel2").owlCarousel({ 

    loop:true,
      center:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1200:{
            items:6
        }
    }


});




  $(".owl-carousel4").owlCarousel({ 

    loop:true,
      center:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1200:{
            items:6
        }
    }


});



  $(".owl-carousel5").owlCarousel({ 

    loop:true,
      center:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1200:{
            items:6
        }
    }


});







  $(".owl-carousel3").owlCarousel({ 

    loop:true,
      center:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:1
        }
    }


});

};
