// 2D array version of the csv file
/* Filename, Article title, Date of Pub, Article URL, Narrator's username, Tags (comma-separated), Upload timestamp, Upvotes, Downvotes, Ranking */
var narrationInfo = [
["0001", "Money bag: Police raid on anti-corruption official uncovers over $120mn in cash", "10/10/2016", "https://www.rt.com/news/358891-russia-corruption-officer-dollars/", "aidan_davis", "Business, Politics", "9/11/16 21:19", 18, 2, 0.6989617936],
["0002", "Venice: Emma Stone Wins Best Actress Prize for ‘La La Land’", "9/11/2016", "https://variety.com/2016/film/news/venice-emma-stone-wins-female-acting-prize-for-la-la-land-1201856971/", "aidan_davis", "Science", "9/11/16 21:30", 5, 0, 0.5655085052],
["0003", "Activity of Huntington’s disease gene curbed for 6 months in mice", "9/10/2016", "http://www.psypost.org/2016/09/activity-huntingtons-disease-gene-curbed-6-months-mice-44870", "aidan_davis", "Business", "9/11/16 21:41", 3, 6, 0.1205815987],
["0004", "Shailene Woodley on 'Divergent' Move to TV: 'I Didn’t Sign Up to Be in a Television Show" ,"9/11/2016", "http://www.hollywoodreporter.com/news/shailene-woodley-divergent-move-tv-927187", "aidan_davis", "Entertainment", "9/11/16 21:52", 4, 2, 0.2999883213],
["0005", "96 people who ate Chipotle and got sick settled for cash — and some free-burrito coupons", "9/8/2016", "http://www.denverpost.com/2016/09/09/chipotle-foodborne-illness-cases-settled/", "aidan_davis", "Food, Business", "9/11/16 22:03", 1, 15, 0.01111905731],
];

function getTagsSelected() {
	var checkboxes = document.getElementsByName("tag"); // find all checkboxes
	var tagsSelected = []; // array for checked checkboxes

	// add the checked ones to the array
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			tagsSelected.push(checkboxes[i].value);
		}
	}
	return tagsSelected;
}

/* displays the tags in the array in a paragraph in the web page */
function displayTagsSelected() {
	var tagsSelected = getTagsSelected();
	document.getElementById("tagTest").innerHTML = tagsSelected;
}

/* selects files that matches the chosen tags */
function SelectFilesByTags() {
	var tagsSelected = getTagsSelected();
	var matchesArray = []; // to store any files with the selected tags

	// iterate through each file's info and see if it has the tags
	for (var i=0; i<narrationInfo.length; i++) {
		for (var x=0; x<tagsSelected.length; x++) {
			if (narrationInfo[i][5].includes(tagsSelected[x])) {
				matchesArray.push(narrationInfo[i]); // push to array
				break; // only want to push a file once
			}
		}
	}
	return matchesArray;
}

/* of the given array of files, chooses the one with the highest rating */
function SelectFileByRating() {
	var matchesArray = SelectFilesByTags();
	// if only one matching file, return that. easy.
	if (matchesArray.length == 1) {
		return matchesArray[0];
		// if there is two, return the one that has the highest ranking
	} else if (matchesArray.length == 2) {
		if (matchesArray[0][9] > matchesArray[1][9]) {
			return matchesArray[0];
		} else {
			return matchesArray [1];
		}
		// iterate through each and return the one that has the highest ranking
	} else if (matchesArray.length > 2) {
		var highestFile = matchesArray[0]; // begin at the start
		for (var i=1; i<matchesArray.length; i++) {
			if (matchesArray[i][9] > highestFile[9]) {
				highestFile = matchesArray[i];
			}
		}
		return highestFile;
	}
}

function runTest() {
	displayTagsSelected();
	
	document.getElementById("selectionTest").innerHTML = SelectFileByRating();
}